import React from 'react';
import {Consumer} from "./R077_ContextApi";

function ContextChildren3(props) {
  return (
    <Consumer>
      {ctxValue => <button onClick={e => ctxValue.setStateFunc('react200')}>
        {ctxValue.name}_button
      </button>}
    </Consumer>
  );
}

export default ContextChildren3;