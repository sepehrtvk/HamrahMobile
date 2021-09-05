import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
const NewTab = (props) => {
  return (
    <Form>
      <Row className="text-start">
        <Col>
          <p className="m-0 ms-5 mt-2" >{props.text}</p>
        </Col>
      </Row>
      <Row className="align-items-center m-md-5 justify-content-between">
        <Col xs="auto" className="my-1">
          <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
            <option value="0">{props.select1text}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col xs="auto" className="my-1 me-auto">
          <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
            <option value="0">{props.select2text}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col xs="auto" className="my-1">
          <Button type="submit">{props.buttonText}</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default NewTab;
