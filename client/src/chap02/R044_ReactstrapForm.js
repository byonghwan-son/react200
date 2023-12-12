import React from 'react';
import {Col, Form, FormGroup, Input, Label, Row} from "reactstrap";

function R044_ReactstrapForm(props) {
  return (
    <div>
      <Form>
        <Label for={`exampleGender`}>Gender</Label>
        <Input type={`select`} bsSize={`md`}>
          <option>no select</option>
          <option>woman</option>
          <option>man</option>
        </Input>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for={`exampleAddress`}>Address</Label>
              <Input type={`text`} name={`address`} id={`address`}/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for={`exampleMobile`}>Mobile</Label>
              <Input type={`text`} name={`mobile`} id={`mobile`}/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for={`exampleAge`}>Age</Label>
              <Input type={`text`} name={`age`} id={`age`}/>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default R044_ReactstrapForm;