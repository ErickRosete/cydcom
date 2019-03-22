import React from 'react'
import "./Card.css"

const Card = (props) => {
  const product = props.product

  return (
    <div className="product__card" onClick={props.handleModalShow.bind(this, product)}>
      <div className="product__card-info">
        <div className="product__card-img-cont">
          <img src={product.imageLinks[0]} alt={product.name} className="img-fluid" />
        </div>
        <div className="bg-gray product__card-info-name">
          <h2>{product.name}</h2>
        </div>
        <div className="bg-gray">
          <p>{product.shortDescription}</p>
        </div>
      </div>
      <div className="product__card-detail">
        <h3>Ver detalles</h3>
      </div>
    </div>

  )
}

export default Card
