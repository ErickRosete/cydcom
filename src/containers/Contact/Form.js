import React, { Component } from 'react'
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import "./Form.css"
import Alert from "react-bootstrap/Alert";


export class ContactForm extends Component {
    state = {
        name: "",
        company: "",
        phone: "",
        email: "",
        equipment: "",
        quantity: "",
        project: "",
        showAlert: true
    }

    changeHandler = (name, event) => {
        this.setState({
            [name]: event.target.value
        });
    }

    showAlertHandler = () => {
        this.setState({ showAlert: true });
        setTimeout(this.hideAlertHandler, 2500);
    };

    hideAlertHandler = () => {
        this.setState({ showAlert: false });
    };

    submitHandler = event => {
        event.preventDefault();
        const name = this.state.name;
        const email = this.state.email;

        //validation
        if (email === "" || name === "") {
            return;
        }

        const requestBody = {
            ...this.state
        };

        fetch(`${process.env.REACT_APP_SERVER_URL}/sendEmail`, {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error("Failed!");
                }
                return res.json();
            })
            .then(resData => {
                console.log(resData);
                this.showAlertHandler();
            })
            .catch(err => {
                console.log(err);
            });
    };
    render() {
        return (
            <div className="contact__form">
                <Container>
                    <Form onSubmit={this.submitHandler}>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="contact__form-first-col">
                                    <Form.Group controlId="formName">
                                        <Form.Control type="text" placeholder="Nombre completo"
                                            value={this.state.name} onChange={this.changeHandler.bind(this, "name")} />
                                    </Form.Group>
                                    <Form.Group controlId="formCompany">
                                        <Form.Control type="text" placeholder="Empresa"
                                            value={this.state.company} onChange={this.changeHandler.bind(this, "company")} />
                                    </Form.Group>
                                    <Form.Group controlId="formPhone">
                                        <Form.Control type="text" placeholder="Teléfono"
                                            value={this.state.phone} onChange={this.changeHandler.bind(this, "phone")} />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail">
                                        <Form.Control type="email" placeholder="Correo electrónico"
                                            value={this.state.email} onChange={this.changeHandler.bind(this, "email")} />
                                    </Form.Group>
                                </div>

                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group controlId="formEquipment">
                                    <Form.Label>¿Qué equipos necesitas?</Form.Label>
                                    <Form.Control type="text"
                                        value={this.state.equipment} onChange={this.changeHandler.bind(this, "equipment")} />
                                </Form.Group>

                                <Form.Group controlId="formQuantity">
                                    <Form.Label>¿Cuántos equipos necesitas?</Form.Label>
                                    <Form.Control type="text"
                                        value={this.state.quantity} onChange={this.changeHandler.bind(this, "quantity")} />
                                </Form.Group>
                                <Form.Group controlId="formProject">
                                    <Form.Label>Explica tu proyecto y por cuanto tiempo los necesitas:</Form.Label>
                                    <Form.Control as="textarea" rows="2"
                                        value={this.state.project} onChange={this.changeHandler.bind(this, "project")} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="contact__form-btn">
                            <button type="submit" className="btn btn-main">Enviar mensaje</button>
                        </div>
                    </Form>
                </Container>

                {this.state.showAlert && (
                    <Alert
                        dismissible
                        onClose={this.hideAlertHandler}
                        className="contact__alert"
                        variant="success"
                    >
                        Su mensaje ha sido recibido, gracias por contactarnos!
                        </Alert>
                )}
            </div>
        )
    }
}

export default ContactForm
