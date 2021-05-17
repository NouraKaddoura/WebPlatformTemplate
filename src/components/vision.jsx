import React, { Component } from "react";
import { Accordion, Card, Button, Container, Col, Row } from "react-bootstrap";
import "../styles/vision.css";

class Vision extends Component {
  render() {
    return (
      <Container fluid>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle variant="link" class="vision1" eventKey="0">
                <img
                  class="img1"
                  src="https://img-premium.flaticon.com/png/512/616/616490.png?token=exp=1621212924~hmac=be303861d485ac5e4ab8a1bdc44e111c"
                />
                &nbsp; Our Vision
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle variant="link" class="vision2" eventKey="1">
                <img
                  class="img1"
                  src="https://img-premium.flaticon.com/png/512/3594/3594431.png?token=exp=1621213408~hmac=90db14e794404264aa3dac40c84add04"
                />
                &nbsp; Our Mission
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle variant="link" class="vision3" eventKey="2">
                <img
                  class="img1"
                  src="https://img-premium.flaticon.com/png/512/945/945147.png?token=exp=1621213610~hmac=a6618c0517c81450590cc08958727430"
                />
                &nbsp; Our Offerings
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Row>
                  <Col>
                    <img class="offer1" src="https://i.imgur.com/Tmz41VH.png" />
                  </Col>
                  <Col>
                    <h3>Hydra</h3>{" "}
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>Pegasus</h3>{" "}
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Col>
                  <Col>
                    <img class="offer1" src="https://i.imgur.com/XgDu4xM.png" />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );
  }
}

export default Vision;
