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
            width="300px" height="80px" viewBox="0 0 300 80" enableBackground="new 0 0 300 80"
            xmlSpace="preserve">
            <polygon className={arrowColor} fillRule="evenodd" clipRule="evenodd" fill="#B2080D" points="255,80 0,80 40,40 0,0 255,0 
            300,40 "/>
            <text className="svg-text" y="50" x="150" textAnchor="middle" fill="white">{props.text}</text>
        </svg>  
        )
}

export default Arrow
