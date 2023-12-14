// import "./App.css"
// import 'bootstrap/dist/css/bootstrap.css'
import React from "react"
import StrAddButton from "./chap03/StrAddButton";

function App(props) {
  return (
    <div>
      <h1>Start React 200!</h1>
      <span>{props.store.getState().data.str}</span><br/>
      {/*<p>CSS 적용하기</p>*/}
      <StrAddButton store={props.store} />
    </div>
  );
}

export default App;
