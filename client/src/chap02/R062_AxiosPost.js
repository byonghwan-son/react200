import React, {useEffect} from 'react';
import axios from "axios";

function R062_AxiosPost(props) {

  useEffect(() => {
    componentDidMount()
  }, []);

  let componentDidMount = () => {
    axios.post('http://date.jsontest.com', {
      a: 'react', b:200
    })
      .then(response => {alert(response.data.date)})
  }

  return (
    <h1>Axios Post</h1>
  );
}

export default R062_AxiosPost;