import React, {useEffect} from 'react';

function R063_CallbackFunc(props) {

  useEffect(() => {
    componentDidMount()
  }, []);

  let componentDidMount = () => {
    logPrint(1, (return1) => {
      console.log(`return1 : ${return1}`)
      logPrint(return1, (return2) => {
        console.log(`return2 : ${return2}`)
      })
    })
  }

  let logPrint = (param, callback) => {
    console.log(`logPrint param : ${param}`)
    param += param
    callback(param)
  }

  return (
    <h1>Callback Function</h1>
  );
}

export default R063_CallbackFunc;