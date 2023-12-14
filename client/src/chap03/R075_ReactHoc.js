import React from 'react';
import withHocComponent from "./withHocComponent";

function R075_ReactHoc(props) {
  console.log(`2. HocComponent render`)

  return (
    <>
      <h2>props.name : {props.name}</h2>
    </>
  );
}

export default withHocComponent(R075_ReactHoc, 'R075_ReactHoc');