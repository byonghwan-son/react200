import React from 'react';
import {Link} from "react-router-dom";

function R089_ReactRouter(props) {
  return (
    <>
      <h1>path='/'</h1>
      <h3>R089_reactRouter</h3>
      <Link to={`/reactRoute2`}>reactRoute2</Link>
    </>
  );
}

export default R089_ReactRouter;