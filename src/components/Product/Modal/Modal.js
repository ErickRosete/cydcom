import React from 'react';
import Modal from "react-bootstrap/Modal";
import ProductCarousel from "./Carousel/Carousel"

const ProductModal = (props) => {
    const product = props.product;

    return (
        <Modal
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
                {product.imageLinks && <ProductCarousel images={product.imageLinks}></ProductCarousel>}
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide} className="btn btn-main">Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProductModal
