import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup";
import Link from "react-router-dom/Link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import withApollo from "react-apollo/withApollo";
import Mutation from "react-apollo/Mutation";
import {
    GET_CLIENT_BY_EMAIL,
    ADD_PRODUCT_QUOTATION, ADD_QUOTATION, EDIT_CLIENT, ADD_CLIENT
} from "./constants"


import "./Quotation.css";

export class QuotationPage extends Component {
    state = {
        productQuotations: [],
        client: {
            email: "",
            company: "",
            name: "",
            phone: "",
            address: ""
        }
    }

    componentDidMount() {
        const productQuotations = JSON.parse(localStorage.getItem('productQuotations'));
        if (productQuotations) {
            this.setState({ productQuotations })
        }
        console.log(productQuotations)
    }

    changeProductHandler = (name, index, event) => {
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

    changeClientHandler = (name, event) => {
        this.setState({
            client: {
                ...this.state.client,
                [name]: event.target.value
            }
        })

    }

    deleteProductQuotation = (index) => {
        const productQuotations = [...this.state.productQuotations];
        productQuotations.splice(index, 1)
        this.setState({ productQuotations })

        //save in local storage
        const saveQuotation = JSON.stringify(productQuotations);
        localStorage.setItem('productQuotations', saveQuotation)
    }

    searchClient = async () => {
        if (!this.state.client.email) {
            alert("Ingrese un correo electrónico")
            return;
        }
        try {
            const query = await this.props.client.query({
                query: GET_CLIENT_BY_EMAIL,
                variables: { email: this.state.client.email },
            });
            if (query) {
                console.log(query)
            }
        } catch (error) {
            alert("Cliente no encontrado")
        }
    }

    submitHandler = (addQuotation, addProductQuotation, editClient, addClient) => {
        if (this.state.productQuotations.length > 0) {
            console.log(addQuotation, addProductQuotation, editClient, addClient)
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
                                                    onChange={this.changeProductHandler.bind(this, "quantity", index)} />
                                            </Form.Group>
                                        </div>
                                        <Form.Group controlId={`formComment${product._id}`}>
                                            <Form.Label>Comentarios</Form.Label>
                                            <Form.Control as="textarea" rows="3" type="text"
                                                placeholder="Quiero este modelo pero con 12 GB de RAM"
                                                value={productQuotation.comment}
                                                onChange={this.changeProductHandler.bind(this, "comment", index)} />
                                        </Form.Group>
                                    </div>
                                    <button onClick={this.deleteProductQuotation.bind(this, index)} className="quotation__product-delete btn-secondary"> X </button>
                                </div>
                            )
                        })}
                    </div>

                    {this.state.productQuotations.length > 0 ?
                        <div className="bg-gray client-form-cont">
                            <Mutation mutation={ADD_QUOTATION}>
                                {(addQuotation) =>
                                    (<Mutation mutation={ADD_PRODUCT_QUOTATION}>
                                        {(addProductQuotation) =>
                                            (<Mutation mutation={EDIT_CLIENT}>
                                                {(editClient) => (
                                                    <Mutation mutation={ADD_CLIENT}>
                                                        {(addClient) => (
                                                            <Form className="client-form" onSubmit={this.submitHandler.bind(this, addQuotation, addProductQuotation, editClient, addClient)} >
                                                                <p style={{ textAlign: 'justify' }}>Si ya has cotizado anteriormente escribe tu correo electrónico y haz click en la lupa para buscar tu información.</p>

                                                                <Form.Group controlId="formEmail">
                                                                    <Form.Label>Correo electrónico</Form.Label>
                                                                    <InputGroup>
                                                                        <InputGroup.Prepend>
                                                                            <button type="button" onClick={this.searchClient} className="input-btn btn-main">
                                                                                <FontAwesomeIcon
                                                                                    icon="search"
                                                                                    size="lg"
                                                                                />
                                                                            </button>
                                                                        </InputGroup.Prepend>
                                                                        <Form.Control type="email" placeholder="Correo electrónico" required
                                                                            value={this.state.client.email} onChange={this.changeClientHandler.bind(this, "email")} />
                                                                    </InputGroup>

                                                                </Form.Group>

                                                                <Form.Group controlId="formName">
                                                                    <Form.Label>Nombre completo</Form.Label>
                                                                    <Form.Control type="text" placeholder="Nombre completo"
                                                                        value={this.state.client.name} onChange={this.changeClientHandler.bind(this, "name")} />
                                                                </Form.Group>
                                                                <Form.Group controlId="formCompany">
                                                                    <Form.Label>Empresa</Form.Label>
                                                                    <Form.Control type="text" placeholder="Empresa"
                                                                        value={this.state.client.company} onChange={this.changeClientHandler.bind(this, "company")} />
                                                                </Form.Group>
                                                                <Form.Group controlId="formPhone">
                                                                    <Form.Label>Teléfono</Form.Label>
                                                                    <Form.Control type="text" placeholder="Teléfono"
                                                                        value={this.state.client.phone} onChange={this.changeClientHandler.bind(this, "phone")} />
                                                                </Form.Group>
                                                                <Form.Group controlId="formAddress">
                                                                    <Form.Label>Dirección</Form.Label>
                                                                    <Form.Control type="text" placeholder="Dirección"
                                                                        value={this.state.client.address} onChange={this.changeClientHandler.bind(this, "address")} />
                                                                </Form.Group>


                                                                <div className="quotation__button-cont">
                                                                    <button type="submit" className="btn btn-main">Cotizar</button>
                                                                </div>
                                                            </Form>
                                                        )}
                                                    </Mutation>
                                                )}
                                            </Mutation>)
                                        }
                                    </Mutation>)}
                            </Mutation>
                        </div>
                        :
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

export default withApollo(QuotationPage);
