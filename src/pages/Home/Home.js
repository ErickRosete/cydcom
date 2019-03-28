import React, { Component } from "react";

import Layout from "../../components/Layout/Layout";

import banner from "../../Assets/Images/Home/banner.png";
import tabla500w from "../../Assets/Images/Home/tabla-500w.png"
import tabla1000w from "../../Assets/Images/Home/tabla-1000w.png"
import tabla2100w from "../../Assets/Images/Home/tabla-2100w.png"
import tabla4200w from "../../Assets/Images/Home/tabla-4200w.png"

import Process from "../../components/Home/Process/Process"

import Link from "react-router-dom/Link"
import "./Home.css";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.introEl = React.createRef();
    this.processEl = React.createRef();

    if (window.screen.width >= 768) {
      //computer
      this.state = {
        navbarColor: "rgba(0, 0, 0, 0)",
        arrowTransition: [false, false, false, false]
      };
    } else {
      //cellphone
      this.state = {
        navbarColor: "#B2080D",
        arrowTransition: [false, false, false, false]
      };
    }
  }

  componentDidMount() {
    if (window.screen.width >= 768) {
      window.addEventListener("scroll", this.scrollHandler);
    }
    else {
      setTimeout(this.arrowAnimation, 500);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
    this.setState({ navbarColor: "#B2080D" });
  }

  arrowAnimation = () => {
    const arrowTransition = [...this.state.arrowTransition]
    for (let i = 0; i < arrowTransition.length; i++) {
      setTimeout(() => {
        arrowTransition[i] = true;
        this.setState({ arrowTransition })
      }, 500 * i);
    }
  }

  scrollHandler = () => {
    const scrollOnTop = window.scrollY < this.introEl.current.clientHeight - 90;
    if (scrollOnTop) {
      if (this.state.navbarColor !== "rgba(0, 0, 0, 0)") {
        this.setState({ navbarColor: "rgba(0, 0, 0, 0)" });
      }
    } else {
      if (this.state.navbarColor !== "#B2080D") {
        this.setState({
          navbarColor: "#B2080D",
        });
      }
    }

    const arrowsVisible = window.scrollY > this.processEl.current.clientHeight;
    if (arrowsVisible && !this.state.arrowTransition[0]) {
      this.arrowAnimation();
    }

  };

  render() {
    return (
      <Layout navbarColor={this.state.navbarColor}>
        <div className="home">

          <div className="home__banner" ref={this.introEl}>
            <img className="img-fluid" src={banner} alt="banner"></img>
            <div className="home__banner-title">
              <h1>Somos la <span className="text-red">mejor</span> opción</h1>
              <h2>Renta de equipo de cómputo</h2>
            </div>
          </div>

          <div ref={this.processEl}>
            <Process arrowTransition={this.state.arrowTransition}></Process>
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
