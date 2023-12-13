import React from 'react';

function R071_OnKey(props) {
  let OnKey = (event, e) => {
    let val = e.target.value
    console.log(`event : ${event}, value : ${val}`)
  }

  return (
    <>
      {/*첫 번째 입력값은 공백*/}
      onKeyDown : <input type={`text`} onKeyDown={e => OnKey('onKeyDown', e)}/><br/>
      {/*첫 번째 입력값은 공백*/}
      onKeyPress : <input type={`text`} onKeyPress={e => OnKey('onKeyPress', e)}/><br/>
      {/*가급적 KeyUp 이벤트를 사용해야만 TextBox에 입력된 값을 즉시 확인할 수 있음.*/}
      onKeyUp : <input type={`text`} onKeyUp={e => OnKey('onKeyUp', e)}/><br/>
    </>
  );
}

export default R071_OnKey;