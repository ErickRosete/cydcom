import React from 'react'
import Link from "react-router-dom/Link"
import "./Contact.css"

const Contact = () => {
    return (
        <div className="product__contact">
            <h2 className="product__contact-title">Cotización inmediata</h2>
            <Link to="/contacto">
                <button className="btn btn-main" >Contáctanos ahora</button>
            </Link>
        </div>
    )
}

export default Contact
