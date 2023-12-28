import React, {useEffect} from 'react';
import cookie from "react-cookies";

function R085_CookieSave(props) {

  useEffect(() => {
    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + 60) // 1시간짜리 쿠키
    cookie.save(
      'userid', 'react200',
      {
        path: '/',
        expires,
        //secure : true,
        httpOnly : true
      }
    )
  }, []);

  return (
    <>
      <h3>react-cookies Save</h3>
    </>
  );
}

export default R085_CookieSave;