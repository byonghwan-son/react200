import React from 'react';
import debounce from 'lodash.debounce'

// 입력이 완료된 후 해당 시간 후에 콜백함수 실행
function R094_ReactDebounce(props) {
  const debounceFunc = debounce(() => {
    console.log('debounce api call');
  }, 1000);

  return (
    <>
      <h2>검색어 입력</h2>
      <input type="text" onChange={debounceFunc}/>
    </>
  );
}

export default R094_ReactDebounce;