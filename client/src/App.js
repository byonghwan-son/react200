// import "./App.css"
// import 'bootstrap/dist/css/bootstrap.css'
import React from "react"
<<<<<<< HEAD
import R087_cookieRemove from "./chap03/R087_cookieRemove";
=======
import { connect } from 'react-redux';
import StrAddButton from "./chap03/StrAddButton";
>>>>>>> a1426ff779a3ecb92a2afb6a9f1e27352ab04923

function App(props) {
  const store = props.store;
  return (
    <div>
      <h1>Start React 200!</h1>
<<<<<<< HEAD
      <R087_cookieRemove />
=======
      {/*<span>{store.getState().data.str}</span><br/>*/}
      {/*<p>CSS 적용하기</p>*/}
      {/*<StrAddButton store={store} />*/}
      <span>{props.str}</span><br />
      <StrAddButton AppProp={`200`} />
>>>>>>> a1426ff779a3ecb92a2afb6a9f1e27352ab04923
    </div>
  );
}

let mapStateToProps = (state, props) => {
  console.log(`Props from index.js : ${props.indexProp}`)
  console.log(`mapStateToProps : ${state.data.str}`)
  return {
    str: state.data.str
  }
}

App = connect(mapStateToProps, null)(App);

export default App;
