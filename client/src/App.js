// import "./App.css"
// import 'bootstrap/dist/css/bootstrap.css'
import React from "react"
import ReactHoc from "./chap03/R075_ReactHoc";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      {/*<p>CSS 적용하기</p>*/}
      <ReactHoc name={`React200`} />
    </div>
  );
}

export default App;
