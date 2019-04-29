import React, { Component } from "react";

import { Helmet } from "react-helmet";
import { Container, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Arrow from "../../components/Home/Arrow"
import Benefit from "../../components/Home/Benefit"


import banner from "../../Assets/Images/Home/banner.png";
import foto2 from "../../Assets/Images/Home/foto2.png";
import foto3 from "../../Assets/Images/Home/foto3.png";
import foto4 from "../../Assets/Images/Home/foto4.png";

import "./Home_v1.css";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.introEl = React.createRef();
  }

  state = {
    navbarColor: "rgba(0, 0, 0, 0)"
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
    this.setState({ navbarColor: "#B2080D" });
  }

  scrollHandler = () => {
    const scrollOnTop = window.scrollY < this.introEl.current.clientHeight - 90;
    if (scrollOnTop) {
      if (this.state.navbarColor !== "rgba(0, 0, 0, 0)") {
        this.setState({ navbarColor: "rgba(0, 0, 0, 0)" });
      }
    } else {
      if (this.state.navbarColor !== "#B2080D") {
        this.setState({ navbarColor: "#B2080D" });
      }
    }
  };

  render() {
    return (
      <Layout navbarColor={this.state.navbarColor}>
        <div className="home">
          <Helmet>
            <title>EPSILON | Renta de computadoras</title>
            <meta
              name="description"
              content="Renta de computadoras, proyectores e ipad"
            />
          </Helmet>

          <div className="home__banner" ref={this.introEl}>
            <img className="img-fluid" src={banner} alt="banner"></img>
            <div className="home__banner-title">
              <h1>Somos la <span className="text-red">mejor</span> opción</h1>
              <h2>Renta de equipo de cómputo</h2>
            </div>
          </div>

          <div className="home__process">
            <h1 className="home__process-title">proceso de renta</h1>
            <h2 className="home__process-subtitle">Optimiza el plan financiero de tu empresa</h2>
            <div className="home__process-steps">
              <Arrow text="1. Cotización" red />
              <Arrow text="2. Documentación" gray />
              <Arrow text="3. Entrega" red />
              <Arrow text="4. Optimiza" gray />
            </div>
          </div>
          <Container fluid>
            <Row className="bg-light-gray">
              <Col xs={12} md={6} className="order-md-1 p-md-0">
                <img className="img-fluid" src={foto2} alt="foto 2"></img>
              </Col>
              <Col xs={12} md={6} className="order-md-2">
                <div className="home__catalogue-description">
                  <h1>Lap-tops</h1>
                  <p>Desde 1 día a 36 meses. Planes de arrendamiento con diferentes opciones al término del contrato</p>
                  <Button>Ver catálogo</Button>
                </div>
              </Col>
              <Col xs={12} md={6} className="order-md-4 p-md-0">
                <img className="img-fluid" src={foto3} alt="foto 3"></img>
              </Col>
              <Col xs={12} md={6} className="order-md-3">
                <div className="home__catalogue-description">
                  <h1>Computadoras PC</h1>
                  <p>Rentamos computadoras de todas las marcas, con planes desde 1 día hasta 36 meses.</p>
                  <Button>Ver catálogo</Button>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="home__benefits">
            <h1>Beneficios de  <label className="text-red">elegirnos</label></h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Benefit text="Deducible al 100%"></Benefit>
              <Benefit text="Pagos fijos"></Benefit>
              <Benefit text="Optimización financiera"></Benefit>
              <Benefit text="Al término tu eliges"></Benefit>
              <Benefit text="Garantía de equipo"></Benefit>
              <Benefit text="Desde 1 día hasta 36 meses"></Benefit>
            </div>
          </div>

          <div className="home__apple">
            <img src={foto4} alt="apple" className="img-fluid" />
            <div className="home__apple-text">
              <h2>Contamos con equipos Apple</h2>
              <p>Contamos con iPads, Macbook Pro, iMac y Mac en renta.
                Pregunta por las opciones de arrendamiento
              </p>
            </div>
          </div>

          <div className="home__info">
            <h1>Solicita <span className="text-red">información</span></h1>
            <Button variant="secondary">Contáctanos ahora</Button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default HomePage;
