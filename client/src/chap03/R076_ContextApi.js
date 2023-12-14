import React from 'react';
import ContextChildren from "./contextChildren";

const {Provider, Consumer} = React.createContext()
export {Consumer}

function R076_ContextApi(props) {
  return (
    <div>
      <Provider value={`React200`}>
        <ContextChildren />
      </Provider>
    </div>
  );
}

export default R076_ContextApi;