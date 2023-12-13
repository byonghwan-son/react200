import React from 'react';
import {Button, PopoverBody, PopoverHeader, UncontrolledPopover} from "reactstrap";

function R051_ReactstrapPopover(props) {
  return (
    <>
      <Button id={`Popover_id`} type={`button`}>Popover button</Button>
      <UncontrolledPopover placement={`right`} target={`Popover_id`}>
        <PopoverHeader>React 200</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias amet autem.
        </PopoverBody>
      </UncontrolledPopover>
    </>
  );
}

export default R051_ReactstrapPopover;