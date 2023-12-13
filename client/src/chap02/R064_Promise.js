import React, {useEffect} from 'react';

function R064_Promise(props) {

  useEffect(() => {
    new Promise(resolve => {
        setTimeout(() => resolve('react'), 1500)
      })
      .then(result => {
        console.log(result)
        return result + 200
      })
      .then(result => {
        console.log(result)
      })
  }, []);

  return (
    <h1>Promise</h1>
  );
}

export default R064_Promise;