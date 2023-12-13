import React, {useEffect} from 'react';

function R060_FetchPost(props) {

  useEffect(() => {
    componentDidMount()
  }, []);

  let componentDidMount = async () => {
    const response = await fetch('http://date.jsontest.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { a:'react', b:200 }
    })
    const body = await response.json()
    alert(body.date)
  }

  return (
    <h1>fetch post</h1>
  );
}

export default R060_FetchPost;