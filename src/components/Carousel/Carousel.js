import React from 'react';
import Carousel from "react-bootstrap/Carousel"
import "./Carousel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ImageCarousel = (props) => {
    return (
        <Carousel
            controls={props.images.length > 1}
            indicators={false}
            prevIcon={<FontAwesomeIcon icon="chevron-circle-left" size="3x" />}
            nextIcon={<FontAwesomeIcon icon="chevron-circle-right" size="3x" />}
        >
            {props.images.map((image, index) => (<Carousel.Item key={`${image}/${index}`}>
                <img
                    className="d-block w-100"
                    src={image}
                    alt={`Slide-${index}`}
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>)
            )}
        </Carousel>
    );
}

export default ImageCarousel
