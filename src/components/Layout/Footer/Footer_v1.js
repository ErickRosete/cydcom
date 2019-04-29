import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import logoAstra from "../../../Assets/Images/Logos/logo-astra.png"

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <div className="footer__main">
              <p>©2019 | Centro y Desarollo de Cómputo CYD S.A de C.V.</p>
              <p>Aviso de privacidad y cookies</p>
              <br></br>
              <p>Desarrollado por:<img height={30} src={logoAstra} alt="logo AstraDev"></img></p>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="footer__info">
              <div className="footer__section">
                <h3>Teléfonos</h3>
                <p>CDMX (55) 8526-2318</p>
                <p>Qro (442) 3885-376</p>
              </div>
              <div className="footer__section">
                <h3>Horario</h3>
                <p>Lunes a Viernes:</p>
                <p>9:00 am. - 7:00 pm.</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="footer__info">
              <div className="footer__section">
                <h3>E-mail</h3>
                <p>ventas@epsilon.com.mx</p>
                <p>ventas.qro@epsilon.com.mx</p>
              </div>
              <div className="footer__section">
                <h3>Ubicación</h3>
                <p>Matriz en Edo. de Mex.</p>
                <p>Sucursal en Queretaro.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
