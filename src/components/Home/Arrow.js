import React from 'react'
import "./Arrow.css"

const Arrow = props => {
    let arrowColor ="";
    if(props.gray){
        arrowColor="gray-arrow";
    }
    else if(props.red){
        arrowColor="red-arrow";
    }

  return (
        <svg className="arrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="250px" height="70px" viewBox="0 0 270 70" enableBackground="new 0 0 270 70"
            xmlSpace="preserve">
            <polygon className={arrowColor} fillRule="evenodd" clipRule="evenodd" fill="#B2080D" points="225,70 0,70 35,35 0,0 225,0 
            270,35 "/>
            <text className="svg-text" y="45" x="135" textAnchor="middle" fill="white">{props.text}</text>
        </svg>  
        )
}

export default Arrow
