import React, {useEffect} from 'react';
import cookie from "react-cookies";

function R087_CookieRemove(props) {
  useEffect(() => {
    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + 60)
    cookie.save('userid', 'react', {
      path: '/',
      expires,
      // secure : true
      // httpOnly : true
    })
  }, []);

  setTimeout(() => {
    cookie.remove('userid', {path: '/'})
  }, 1000);

  setTimeout(() => {
      alert(cookie.load('userid'))
    },
    2000);

  return (
    <>
      <h3>react-cookies </h3>
    </>
  );
}

export default R087_CookieRemove;