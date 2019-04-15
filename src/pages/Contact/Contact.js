import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import ContactForm from "../../containers/Contact/Form"
import Map from "../../components/Map/Map"
import "./Contact.css";

export class ContactPage extends Component {

    render() {
        return (
            <Layout>
                <div className="contact">
                    <div className="contact__title">
                        <h1>Contacto</h1>
                    </div>

                    <ContactForm></ContactForm>

                    <div className="contact__location">
                        <div className="contact__location-address">
                            <p>Paseo del Otoño No. 114, Lote 21, manzana XXII, 114, La Florida, Naucalpan, Estado de México</p>
                            <p>
                                <span>(55) 8526-2318 | </span>
                                <span>ventas@epsilon.com | </span>
                                <span>Lunes a Viernes: 9.00 am. - 7.00 pm.</span>
                            </p>
                        </div>
                        <div className="contact__location-map">
                            <Map coords={{ lat: 19.4955729, lng: -99.2365598 }} />
                        </div>
                    </div>

                </div>
            </Layout>
        );
    }
}

export default ContactPage;
