import React from 'react';
import {add} from "./actions";

function StrAddButton(props) {
  let addString = () => {
    props.store.dispatch(add())
  }

  return (
    <>
      <input value={`Add200`} type={`button`} onClick={addString}/>
    </>
  );
}

export default StrAddButton;