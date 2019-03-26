import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import ContactForm from "../../containers/Contact/Form"
import Map from "../../components/Map/Map"
import "./Contact.css";

export class HomePage extends Component {

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
                            <p>Hermenegildo Galeana #135 Col. La Loma, C.P. 54060 Estado de México.</p>
                            <p>
                                <span>(55) 8526-2318 | </span>
                                <span>ventas@epsilon.com | </span>
                                <span>Lunes a Viernes: 9.00 am. - 7.00 pm.</span>
                            </p>
                        </div>
                        <div className="contact__location-map">
                            <Map coords={{ lat: 32.442408, lng: -114.743104 }} />
                        </div>
                    </div>

                </div>
            </Layout>
        );
    }
}

export default HomePage;
