// import "./App.css"
// import 'bootstrap/dist/css/bootstrap.css'
import React from "react"

function App(props) {
  const store = props.store;
  return (
    <div>
      <h1>Start React 200!</h1>
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
