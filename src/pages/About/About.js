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
                            Somos una empresa comprometida con el cliente, proveemos una atención personalizada desde el primer contacto y 
                            ofrecemos servicios de calidad, donde nuestros productos son instalados rápida y puntualmente.
                        </p>
                    </div>
                    <Container fluid className="mb-5">
                        <Row>
                            <Col xs={12} md={6} className="about__vision-cont">
                                <div className="about__vision">
                                    <h2 className="text-red">Misión</h2>
                                    <p>
                                        Epsilon busca ofrecer la mejor experiencia en hardware y software al consumidor a través de equipo
                                        de cómputo y accesorios que satisfaga las necesidades específicas y generales de su organización.
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className="about__vision-cont">
                                <div className="about__vision">
                                    <h2 className="text-red">Visión</h2>
                                    <p>
                                        Consolidar el liderazgo de Epsilon en el mercado nacional, expandiendo su penetración de servicios
                                        de arrendamiento de equipo de cómputo y accesorios en todos los mercados posibles, para situarnos
                                        como una de las empresas de más rápido y mejor crecimiento a nivel nacional.
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
