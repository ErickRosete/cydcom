import React from 'react'
import "./Card.css"
import Link from "react-router-dom/Link";

const Card = (props) => {
  const category = props.category

  return (
    <Link to={`/renta/${category._id}`}>
      <div className="category__card">
        <div className="category__card-info">
          <div className="category__card-img-cont">
            <img src={category.imageLink} alt={category.name} className="img-fluid" />
          </div>
          <div className="bg-gray">
            <h2>{category.name}</h2>
          </div>
        </div>
        <div className="category__card-detail">
          <h3>Ver catálogo</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card