import React, {Children, useState} from 'react';
import ContextChildren3 from "./contextChildren3";

const { Provider, Consumer } = React.createContext()
export { Consumer }

function R077_ContextApi(props) {

  const [State, setState] = useState({})

  const setStateFunc = (value) => {
    setState({ name: value })
  }

  const content = {
    ...State,
    setStateFunc: setStateFunc
  }

  return (
    <Provider value={content}>
      <ContextChildren3 />
    </Provider>
  );
}

export default R077_ContextApi;