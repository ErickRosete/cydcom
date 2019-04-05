import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import Form from "react-bootstrap/Form"
import Link from "react-router-dom/Link"

import "./Quotation.css";

export class QuotationPage extends Component {
    state = {
        productQuotations: []
    }

    componentDidMount() {
        const productQuotations = JSON.parse(localStorage.getItem('productQuotations'));
        if (productQuotations) {
            this.setState({ productQuotations })
        }
        console.log(productQuotations)
    }

    changeHandler = (name, index, event) => {
        const productQuotations = [...this.state.productQuotations];
        productQuotations[index] = {
            ...productQuotations[index],
            [name]: event.target.value
        }
        this.setState({
            productQuotations
        })

        //save in local storage
        const saveQuotation = JSON.stringify(productQuotations);
        localStorage.setItem('productQuotations', saveQuotation)
    }

    deleteProductQuotation = (index) => {
        const productQuotations = [...this.state.productQuotations];
        productQuotations.splice(index, 1)
        this.setState({ productQuotations })

        //save in local storage
        const saveQuotation = JSON.stringify(productQuotations);
        localStorage.setItem('productQuotations', saveQuotation)
    }

    submitHandler = () => {
        if (this.state.productQuotations.length > 0) {
            alert("Realizaremos la cotización a la brevedad");
            localStorage.clear();
            this.setState({ productQuotations: [] })
        }

    }

    render() {
        return (
            <Layout>
                <div className="quotation">
                    <div className="quotation__title">
                        <h1>Cotización</h1>
                    </div>

                    <div className="quotation__product-list">
                        {this.state.productQuotations.map((productQuotation, index) => {
                            const product = productQuotation.product;
                            return (
                                <div className="quotation__product-card" key={product._id}>
                                    <img src={product.imageLinks[0]}
                                        alt={product.name}></img>
                                    <div className="quotation__product-info">
                                        <div className="quotation__product-name">
                                            <p>{product.name}</p>
                                            <Form.Group style={{ maxWidth: '4rem' }} controlId={`formQuantity${product._id}`}>
                                                <Form.Label>Cantidad</Form.Label>
                                                <Form.Control type="number" min={1} value={productQuotation.quantity}
                                                    onChange={this.changeHandler.bind(this, "quantity", index)} />
                                            </Form.Group>
                                        </div>
                                        <Form.Group controlId={`formComment${product._id}`}>
                                            <Form.Label>Comentarios</Form.Label>
                                            <Form.Control as="textarea" rows="3" type="text"
                                                placeholder="Quiero este modelo pero con 12 GB de RAM"
                                                value={productQuotation.comment}
                                                onChange={this.changeHandler.bind(this, "comment", index)} />
                                        </Form.Group>
                                    </div>
                                    <button onClick={this.deleteProductQuotation.bind(this, index)} className="quotation__product-delete btn-secondary"> X </button>
                                </div>
                            )
                        })}
                    </div>

                    {this.state.productQuotations.length > 0 ?
                        <div className="quotation__button-cont">
                            <button onClick={this.submitHandler} className="btn btn-main">Cotizar</button>
                        </div> :
                        <div className="quotation__button-cont">
                            <h2 style={{ marginBottom: '5rem' }}>Actualmente no cuenta con productos en proceso de cotización</h2>
                            <Link to="/renta">
                                <button className="btn btn-main">Ver catálogo de productos</button>
                            </Link>
                        </div>
                    }


                </div>
            </Layout>
        );
    }
}

export default QuotationPage;
