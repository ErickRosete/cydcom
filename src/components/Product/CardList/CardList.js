import React from "react";
import Card from "./Card/Card";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const CardList = props => {
  return (
    <div className="product__list">
      <Container>
        <Row>
          {props.products.map(product => {
            return (
              <Col xs={12} md={6} lg={4} key={product._id} className="mb-4">
                <Card
                  handleModalShow={props.handleModalShow}
                  openDeleteDialog={props.openDeleteDialog}
                  product={product}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CardList;
