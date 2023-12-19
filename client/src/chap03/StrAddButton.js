import React from 'react';
import {add} from "./actions";
import {connect} from "react-redux";

function StrAddButton(props) {
  // let addString = () => {
  //   props.store.dispatch(add())
  // }
  return (
    <>
      {/*<input value={`Add200`} type={`button`} onClick={addString}/>*/}
      <input value={`Add200`} type={`button`} onClick={props.addString} />
    </>
  );
}

let mapDispatchToProps = (dispatch, props) => {
  console.log(`Props from App.js : ${props.AppProp}`)
  return {
    addString: () => dispatch(add())
  }
}

StrAddButton = connect(null, mapDispatchToProps)(StrAddButton)

export default StrAddButton;