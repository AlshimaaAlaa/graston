import React from "react";
import { Col, Row } from "react-bootstrap";
function Footer() {
  return (
    <div className="footerContainer">
      <div>
        <Row>
          <Col className="fs-4 fw-bolder">Contact Us</Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
