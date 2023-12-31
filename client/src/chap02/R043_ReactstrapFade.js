import React, {useState} from 'react';
import {Button, Fade} from "reactstrap";

function R043_ReactstrapFade(props) {
  const [fadeInOut, setFadeInOut] = useState(true)

  let toggle = (e) => {
    setFadeInOut(!fadeInOut)
  }

  return (
    <div>
      // 외부 함수 및 변수에 접근은 백틱(`)을 제거하면 됨.
      <Button color={`success`} onClick={toggle}>Fade In/Out</Button>
      <Fade in={fadeInOut} tag={`h1`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Fade>
    </div>
  );
}

export default R043_ReactstrapFade;