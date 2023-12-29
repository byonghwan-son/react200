import React from 'react';
import { throttle } from 'lodash';

// 입력이 시작되면 지속적으로 해당 시간 만큼 반복적으로 실행함.
function R095_ReactThrottle(props) {
  const throttleFunc = throttle(() => {
    console.log('Throttle API Call');
  }, 1000);

  return (
    <>
      <h2>검색어 입력</h2>
      <input type="text" onChange={throttleFunc}/>
    </>
  );
}

export default R095_ReactThrottle;