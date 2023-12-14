import React from 'react';
import {Consumer} from "./R076_ContextApi";

function ContextChildren2(props) {
  return (
    <Consumer>
      {ctxValue => <h3>{`ContextValue : ${ctxValue}`}</h3>}
    </Consumer>
  );
}

export default ContextChildren2;