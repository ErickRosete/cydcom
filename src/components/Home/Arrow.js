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
            width="240.764px" height="66.116px" viewBox="0 0 240.764 66.116" enableBackground="new 0 0 240.764 66.116"
            xmlSpace="preserve">
            <polygon className={arrowColor} fillRule="evenodd" clipRule="evenodd" fill="#B2080D" points="201.538,66.116 0,66.116 31.963,33.057 0,0 201.538,0 
            240.764,33.057 "/>
            <text className="svg-text" y="40"x="120" textAnchor="middle" fill="white">{props.text}</text>
        </svg>  
        )
}

export default Arrow
