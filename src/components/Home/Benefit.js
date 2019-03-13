import React from 'react'
import palomita from "../../Assets/Images/Home/palomita.png"
import "./Benefit.css"

const Benefit = (props) => {
    return (
        <div className="benefit">
            <img height={70} src={palomita} alt="palomita"></img>
            <p>{props.text}</p>
        </div>
    )
}

export default Benefit
