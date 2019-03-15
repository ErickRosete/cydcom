import React, { Component } from 'react';
import Layout from "../../../components/Layout/Layout"

import foto from "../../../Assets/Images/Home/foto2.png"
import "./Category.css"

export class RentPage extends Component {
    render() {
        return (
            <Layout>
                <div className="rent__category">
                    <div className="rent__category-promotion">
                        <img src={foto} alt="promocion" className="img-fluid"></img>
                    </div>

                    <div className="">
                        <h1>Categorías</h1>

                    </div>

                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                </div>


            </Layout >
        )
    }
}

export default RentPage