import React, { Component } from "react";

import { Helmet } from "react-helmet";
import Layout from "../../components/Layout/Layout";
import Arrow from "../../components/Home/Arrow"

import banner from "../../Assets/Images/Home/banner.png";
import tabla500w from "../../Assets/Images/Home/tabla-500w.png"
import tabla1000w from "../../Assets/Images/Home/tabla-1000w.png"
import tabla2100w from "../../Assets/Images/Home/tabla-2100w.png"
import tabla4200w from "../../Assets/Images/Home/tabla-4200w.png"

import Link from "react-router-dom/Link"
import "./Home.css";

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
            <title>CYDCOM | Renta de computadoras</title>
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

          <div className="home__table">
            <img
              src={tabla1000w}
              srcSet={`${tabla500w} 500w, ${tabla1000w} 1000w, ${tabla2100w} 2100w, ${tabla4200w} 4200w`}
              className="img-fluid"
              alt="tabla"
            />
          </div>

          <div className="home__catalogue">
            <Link to="/renta">
              <button className="btn btn-main">Ver Catálogo</button>
            </Link>
          </div>

        </div>
      </Layout>
    );
  }
}

export default HomePage;
