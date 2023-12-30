import React, {useEffect} from 'react';

function R110ApiGetJson(props) {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/users')
      const body = await response.json();
      console.log(`body.message : ${body.message}`)
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Call Node Api Get</h1>
    </>
  );
}

export default R110ApiGetJson;