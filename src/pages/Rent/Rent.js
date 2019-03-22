import React, { Component } from 'react';
import Layout from "../../components/Layout/Layout"
import Spinner from "../../components/Spinner/Spinner"


import { Query } from "react-apollo";
import { GET_SUBCATEGORIES } from "./constants";
import "./Rent.css"
import "rc-pagination/assets/index.css";

import CategoriesList from "../../components/Categories/CardList/CardList"

import ProductContact from "../../components/Product/Contact/Contact"

export class RentPage extends Component {
    render() {
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

                        <Query query={GET_SUBCATEGORIES}>
                            {({ loading, error, data }) => {
                                if (loading) return <Spinner />;
                                if (error) return <p>Error :( recarga la página!</p>;
                                return (
                                    <CategoriesList categories={data.subcategories}></CategoriesList>
                                );
                            }}
                        </Query>
                    </div>

                    <ProductContact></ProductContact>

                </div>

            </Layout>
        )
    }
}

export default RentPage
