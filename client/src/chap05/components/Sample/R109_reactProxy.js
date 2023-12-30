import React, {useEffect} from 'react';

function R109_ReactProxy(props) {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/users')
      const body = await response.text()
      console.log(body)
    }
    fetchData()
  }, []);

  return (
    <>
      <h1>Proxy Call Node Api</h1>
    </>
  );
}

export default R109_ReactProxy;