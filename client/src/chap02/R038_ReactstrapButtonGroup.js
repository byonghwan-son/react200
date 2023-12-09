import React, {useState} from 'react';
import {Button, ButtonGroup} from "reactstrap";

function R038_ReactstrapButtonGroup(props) {

  const [number, setNumber] = useState(10)

  let move = (type, e) => {
    console.log(e)
    if(type === 'Left') {
      setNumber(number -1)
    } else if(type === 'Right') {
      setNumber(number + 1)
    } else if(type === 'Middle') {
      setNumber(10)
    }
  }

  return (
    <div style={{padding: '0px'}}>
      <ButtonGroup style={{padding: '0px'}}>
        <Button onClick={e => move('Left', e)}>왼쪽</Button>
        <Button onClick={e => move('Middle', e)}>가운데</Button>
        <Button onClick={e => move('Right', e)}>오른쪽</Button>
      </ButtonGroup>
      <br />
      {number}
    </div>
  );
}

export default R038_ReactstrapButtonGroup;