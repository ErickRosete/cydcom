import React from "react";
import Card from "./Card/Card";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const CardList = props => {
  return (
    <div className="category__list">
      <Container>
        <Row>
          {props.categories.map(category => {
            return (
              <Col xs={12} md={6} lg={4} key={category._id} className="mb-4">
                <Card
                  handleModalShow={props.handleModalShow}
                  openDeleteDialog={props.openDeleteDialog}
                  category={category}
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
