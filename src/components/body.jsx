import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


class Body extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Card bg={"dark"} text={"white"}>
              <Card.Header>Who We Are</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card bg={"dark"} text={"white"}>
              <Card.Header>Who We Serve</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg={"dark"} text={"white"}>
              <Card.Header>How We Do It</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Body;
