import React, { Component } from 'react'
import Layout from "../../components/Layout/Layout";
// import aboutBanner from  "../../Assets/Images/About/placeholder.png"
import { Container, Row, Col } from "react-bootstrap"
import "./About.css"

export class AboutPage extends Component {
    render() {
        return (
            <Layout>
                <div className="about">
                    {/* <img src={aboutBanner} className="img-fluid" alt="about"></img> */}
                    <div className="about__main">
                        <h1 className="about__title">
                            <span className="text-red">—</span>Nosotros<span className="text-red">—</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum
                        </p>
                    </div>
                    <Container fluid className="mb-5">
                        <Row>
                            <Col xs={12} md={6} className="about__vision-cont">
                                <div className="about__vision">
                                    <h2 className="text-red">Misión</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className="about__vision-cont">
                                <div className="about__vision">
                                    <h2 className="text-red">Visión</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </div>

                            </Col>
                        </Row>
                    </Container>

                    {/* <div className="about__values">
                        <h2> Valores </h2>
                        <div className="about__values-list">
                            <p> Responsabilidad </p>
                            <p> Confianza </p>
                            <p> Integridad </p>
                            <p> Amabilidad </p>
                            <p> Respeto </p>
                        </div>
                    </div> */}
                </div>
            </Layout>
        )
    }
}
export default AboutPage
