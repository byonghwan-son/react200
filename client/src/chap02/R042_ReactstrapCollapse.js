import React from 'react';
import {Button, Card, CardBody, UncontrolledCollapse} from "reactstrap";

function R042_ReactstrapCollapse(props) {
  return (
    <div>
      <Button color={`warning`} id={`toggle`}>펼치기/접기</Button>
      <UncontrolledCollapse toggler={`#toggle`}>
        <Card>
          <CardBody>
            REACT 200
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}

export default R042_ReactstrapCollapse;