import React, {useEffect} from 'react';

function R059_FetchGet(props) {

  useEffect(() => {
    componentDidMount()
  }, []);

  let componentDidMount = async () => {
    const response = await fetch('http://date.jsontest.com')
    const body = await response.json()
    alert(body.date)
  }

  return (
    <div>
      <h1>fetch get</h1>
    </div>
  );
}

export default R059_FetchGet;