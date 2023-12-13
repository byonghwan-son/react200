import React, {useEffect} from 'react';

function R065_Promise(props) {

  useEffect(() => {
    new Promise((resolve, reject) => {
      reject(Error('Error Info'))
    })
      .then(result => console.log(`then ${result}`))
      .catch(result => console.log(`catch : ${result}`))
  }, []);

  return (
    <h1>Promise</h1>
  );
}

export default R065_Promise;