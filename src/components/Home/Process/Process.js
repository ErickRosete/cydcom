import React from 'react'
import "./Process.css"
import Arrow from "./Arrow/Arrow";
import CSSTransition from "react-transition-group/CSSTransition";

const Process = (props) => {
    return (
        <div className="home__process">
            <h1 className="home__process-title">proceso de renta</h1>
            <h2 className="home__process-subtitle">Optimiza el plan financiero de tu empresa</h2>
            <div className="home__process-steps" style={{ opacity: props.arrowTransition[0] }}>
                <CSSTransition in={props.arrowTransition[0]} timeout={500} classNames="fade" >
                    <Arrow text="1. Cotización" red />
                </CSSTransition>
                <CSSTransition in={props.arrowTransition[1]} timeout={500} classNames="fade" >
                    <Arrow text="2. Documentación" gray />
                </CSSTransition>
                <CSSTransition in={props.arrowTransition[2]} timeout={500} classNames="fade" >
                    <Arrow text="3. Entrega" red />
                </CSSTransition>
                <CSSTransition in={props.arrowTransition[3]} timeout={500} classNames="fade" >
                    <Arrow text="4. Optimiza" gray />
                </CSSTransition>
            </div>
        </div>
    )
}

export default Process
