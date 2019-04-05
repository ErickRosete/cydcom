import React, { Component } from 'react';
import Layout from "../../../components/Layout/Layout"

import CardList from "../../../components/Product/CardList/CardList"
import ProductModal from "../../../components/Product/Modal/Modal"
import PromotionCarousel from "../../../components/Carousel/Carousel"

// import foto from "../../../Assets/Images/Discounts/descuento.png"
import { GET_SUBCATEGORY_PRODUCTS, GET_PROMOTIONS } from "../constants";

import Pagination from "rc-pagination";

import InputGroup from "react-bootstrap/InputGroup";
import Link from "react-router-dom/Link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form"
import Query from "react-apollo/Query"
import Spinner from "../../../components/Spinner/Spinner"
import ProductContact from "../../../components/Product/Contact/Contact"

import "./Category.css"

export class RentPage extends Component {
    constructor(props) {
        super(props)
        this.productsRef = React.createRef()
    }

    state = {
        filter: "",
        currentPage: 1,
        modalShow: false,
        selectedProduct: {},
    }

    handleChangePage = page => {
        window.scrollTo(0, this.productsRef.current.offsetTop)
        this.setState({
            currentPage: page
        });
    };

    handleModalClose = () => this.setState({ modalShow: false });

    handleModalShow = (product) => {
        this.setState({
            modalShow: true,
            selectedProduct: product
        });
    }

    handleFilterChange = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

    handleQuotation = () => {
        let productQuotations = JSON.parse(localStorage.getItem('productQuotations'));
        console.log(productQuotations);
        if (!productQuotations) {
            productQuotations = [];
        }

        const index = productQuotations.findIndex(productQuotation =>
            productQuotation.product._id === this.state.selectedProduct._id)

        if (index >= 0) {
            //already in cart
            const updatedProductQuotation = {
                ...productQuotations[index],
                quantity: productQuotations[index].quantity + 1
            }
            productQuotations[index] = updatedProductQuotation;
        }
        else {
            //not in cart
            const newProductQuotation = {
                product: this.state.selectedProduct,
                comment: "",
                quantity: 1
            }
            productQuotations.push(newProductQuotation)
        }

        productQuotations = JSON.stringify(productQuotations);
        localStorage.setItem('productQuotations', productQuotations)
    }

    filterProducts = products => {
        let filteredProducts = products ? products : [];

        if (this.state.filter) {
            const filter = this.state.filter.toUpperCase();
            filteredProducts = products.filter(
                product =>
                    product.name.toUpperCase().includes(filter) ||
                    product.price.toString().includes(filter) ||
                    product.shortDescription.toUpperCase().includes(filter) ||
                    product.description.toUpperCase().includes(filter)
            );
        }
        return filteredProducts;
    };


    render() {
        const itemsPerPage = 9;
        return (
            <Layout>
                <div className="rent__category">
                    <Query query={GET_PROMOTIONS}>
                        {({ loading, error, data }) => {
                            if (loading) return <Spinner />;
                            if (error) return <p>Error :( recarga la pagina!</p>;
                            const images = data.activePromotions.map(promotion => promotion.imageLink);

                            return (
                                <div className="rent__category-promotion">
                                    {images && <PromotionCarousel images={images}></PromotionCarousel>}
                                </div>
                            );
                        }}
                    </Query>

                    <Query query={GET_SUBCATEGORY_PRODUCTS} variables={{ id: this.props.match.params.id }}>
                        {({ loading, error, data }) => {
                            if (loading) return <Spinner />;
                            if (error) return <p>Error :( recarga la pagina!</p>;

                            if (data.subcategoryProducts.length === 0) {
                                return <h2 style={{ textAlign: "center", margin: "4rem" }}>Lamentablemente, aún no contamos con artículos en esta categoría</h2>
                            }

                            const subcategory = data.subcategoryProducts[0].subcategories.find((subcategory) => subcategory._id === this.props.match.params.id);

                            let filteredProducts = this.filterProducts(data.subcategoryProducts);

                            //pagination logic
                            const first = (this.state.currentPage - 1) * itemsPerPage;
                            const lastAux = this.state.currentPage * itemsPerPage;
                            const last =
                                lastAux > filteredProducts.length
                                    ? filteredProducts.length
                                    : lastAux;

                            return (

                                <React.Fragment>
                                    <div className="rent__category-info" ref={this.productsRef}>
                                        <h1 className="rent__category-title">{subcategory.name}</h1>
                                        <p>Rentamos {subcategory.name} de todas las marcas y características, con planes de renta desde 1 día hasta 36 meses.</p>
                                        <Link to="/renta">
                                            <button className="btn btn-main">Regresar a categorías</button>
                                        </Link>
                                    </div>


                                    <Form style={{ maxWidth: "80%", margin: "auto", marginTop: "2rem" }}>
                                        <Form.Group controlId="Buscador">
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="icon">
                                                        <FontAwesomeIcon
                                                            icon="search"
                                                            size="lg"
                                                        />
                                                    </InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    onChange={this.handleFilterChange}
                                                    value={this.state.filter}
                                                    type="text"
                                                    placeholder="buscar producto..."
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                    </Form>
                                    <CardList
                                        handleModalShow={this.handleModalShow}
                                        products={filteredProducts.slice(first, last)}
                                        openDeleteDialog={this.handleClickOpenDeleteDialog}
                                    />
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <Pagination
                                            onChange={this.handleChangePage}
                                            current={this.state.currentPage}
                                            total={filteredProducts.length}
                                            defaultPageSize={itemsPerPage}
                                        />
                                    </div>
                                </React.Fragment>
                            );
                        }}
                    </Query>
                </div>
                <ProductContact></ProductContact>
                <ProductModal
                    show={this.state.modalShow}
                    onHide={this.handleModalClose}
                    product={this.state.selectedProduct}
                    handleQuotation={this.handleQuotation}
                />
            </Layout >
        )
    }
}

export default RentPage