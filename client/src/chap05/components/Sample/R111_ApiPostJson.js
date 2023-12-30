import React, {useEffect} from 'react';
import axios from "axios";

function R111_ApiPostJson(props) {
  useEffect(() => {
    axios.post('/users', {})
      .then(res => {
        console.log(`response.data.message : ${res.data.message}`)
      })
  }, []);

  return (
    <>
      <h1>Call Node Api Post</h1>
    </>
  );
}

export default R111_ApiPostJson;