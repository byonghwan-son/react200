import React from "react";
import {Button, Input, InputGroup, InputGroupText} from "reactstrap";

function R045_ReactstrapInputGroup(props) {
  return <>
    <InputGroup>
      <Input placeholder={`userid`}/>
      <InputGroupText>@gmail.com</InputGroupText>
    </InputGroup>
    <InputGroup>
      <Button>버튼</Button>
      <Input />
    </InputGroup>
  </>
}

export default R045_ReactstrapInputGroup;
