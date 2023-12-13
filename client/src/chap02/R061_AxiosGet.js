import React, {useEffect} from 'react';
import axios from "axios";

function R061_AxiosGet(props) {

  useEffect(() => {
    componentDidMount()
  }, []);

  let componentDidMount = () => {
    axios.get('http://date.jsontest.com')
      .then(response => {
        alert(response.data.date)
      })
  }

  return (
    <h1>axios get</h1>
  );
}

export default R061_AxiosGet;