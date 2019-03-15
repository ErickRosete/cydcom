import React, { Component } from 'react';
import Layout from "../../components/Layout/Layout"
import Spinner from "../../components/Spinner/Spinner"
import "./Rent.css"

import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

import { Query } from "react-apollo";
import { GET_PRODUCTS } from "./constants";


export class RentPage extends Component {
    render() {
        const itemsPerPage = 10;

        return (
            <Layout>
                <div className="rent">
                    <div className="rent__intro">
                        <h1>Equipos en <span className="text-red">renta</span></h1>
                        <p>Disfruta de los beneficios de rentar con CYDCOM. Te facilitamos el proceso de contratación y con ello contar con el equipo que requieres en el menor tiempo posible; además del respaldo de una empresa seria y profesional</p>
                    </div>

                    <div className="rent__categories">
                        <div className="rent__categories-title">
                            <hr />
                            <h1>Categorías</h1>
                        </div>

                        <Query query={GET_PRODUCTS}>
                            {({ loading, error, data }) => {
                                if (loading) return <Spinner />;
                                if (error) return <p>Error :( recarga la pagina!</p>;

                                let filteredProducts = data.products;

                                if (this.state.filter) {
                                    const filter = this.state.filter.toUpperCase();
                                    filteredProducts = data.products.filter(
                                        product =>
                                            product.name.toUpperCase().includes(filter) ||
                                            product.price.toString().includes(filter) ||
                                            product.shortDescription.toUpperCase().includes(filter) ||
                                            product.description.toUpperCase().includes(filter)
                                    );
                                }

                                //pagination logic
                                const first = (this.state.currentPage - 1) * itemsPerPage;
                                const lastAux = this.state.currentPage * itemsPerPage;
                                const last =
                                    lastAux > filteredProducts.length
                                        ? filteredProducts.length
                                        : lastAux;

                                return (
                                    <React.Fragment>
                                        {/* <CardList
                                            products={filteredProducts.slice(first, last)}
                                            openDeleteDialog={this.handleClickOpenDeleteDialog}
                                        /> */}
                                        <Pagination
                                            onChange={this.handleChangePage}
                                            current={this.state.currentPage}
                                            total={filteredProducts.length}
                                            defaultPageSize={itemsPerPage}
                                        />
                                    </React.Fragment>
                                );
                            }}
                        </Query>

                    </div>
                </div>

            </Layout>
        )
    }
}

export default RentPage
