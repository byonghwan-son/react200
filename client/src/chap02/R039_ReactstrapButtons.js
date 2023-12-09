import React from 'react';
import {Button} from "reactstrap";

function R039_ReactstrapButtons(props) {
  return (
    <div style={{padding: '0px'}}>
      <Button color={`primary`}>Blue</Button>
      <Button color={`info`}>Green</Button>
      <Button color={`success`}>Success</Button>
      <Button color={`warning`}>Warning</Button>
      <Button color={`danger`}>Danger</Button>
      <Button color={`dark`}>Dark Gray</Button>
      <Button color={`secondary`}>Gray</Button>
      <Button color={`light`}>White</Button>
    </div>
  );
}

export default R039_ReactstrapButtons;