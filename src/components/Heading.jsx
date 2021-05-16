import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "../styles/heading.css";

class Heading extends Component {
  render() {
    return (
      <Jumbotron>
        <span>Web Platform </span>
        <p>
          | AUTOMATION | DEV*OPS | SRE | SDLC SUPPORT | MODERN TOOL PILOT |
          MONITORING | SELF SERVICE CAPABILITY | EXPERT OUTAGE SUPPORT |
        </p>
        <h2>
          Let our team of experts help you align the stars to Digital
          Transformation!
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          <Button size="md">Learn more</Button>
        </p>

        <div>
          <h3>Our Vision</h3>
        </div>
        <div>
          <h3>Our Mission</h3>
        </div>
        <div>
          <h3>Our Offerings</h3>
        </div>
      </Jumbotron>
    );
  }
}

export default Heading;
