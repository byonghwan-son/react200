import React from 'react';
import {Spinner} from "reactstrap";

function R053_ReactstrapSpinner(props) {
  return (
    <>
      <Spinner color={`secondary`} />
      <Spinner color={`success`} />
      <Spinner type={`grow`} color={`dark`} />
      <Spinner type={`grow`} color={`info`} />
      <Spinner size={`sm`} color={`primary`} />
      <Spinner style={{width: '10rem', height: '0.5rem'}} color={`dark`} />
      <Spinner style={{width: '10rem', height: '10rem'}} color={`secondary`} />
      <Spinner style={{width: '3rem', height: '10rem'}} type={`grow`} color={`primary`} />
    </>
  );
}

export default R053_ReactstrapSpinner;