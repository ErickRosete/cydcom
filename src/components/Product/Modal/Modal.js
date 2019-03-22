import React from 'react';
import Modal from "react-bootstrap/Modal";
import "./Modal.css"
import ProductCarousel from "./Carousel/Carousel"
import { Col, Row, Container } from "react-bootstrap"

const ProductModal = (props) => {
    const product = props.product;

    return (
        <Modal
            className="product__modal"
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {product.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container fluid>
                    <Row>
                        <Col xs={12} lg={6}>
                            <div className="product__modal-img">
                                {product.imageLinks && <ProductCarousel images={product.imageLinks}></ProductCarousel>}
                                <div className="bg-gray">
                                    <h2>{product.name}</h2>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="product__modal-details">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <h2>Características</h2>
                                <div className="product__modal-features" dangerouslySetInnerHTML={{ __html: product.description }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body >
            <Modal.Footer>
                <button onClick={props.onHide} className="btn btn-main">Regresar al catálogo</button>
                <button onClick={props.onHide} className="btn btn-main d-none d-lg-block">Solicita cotización</button>
            </Modal.Footer>
        </Modal >
    )
}

export default ProductModal
