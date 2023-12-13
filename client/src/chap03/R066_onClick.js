import React from 'react';

function R066_OnClick(props) {
  let buttonClick = (param) => {
    if(typeof param != 'string') param = 'Click a'
    console.log(`param : ${param}`)
  }

  return (
    <div>
      <button onClick={e => buttonClick("Click button")}>Click button</button>
      <div onClick={e => buttonClick("Click div")}>Click Div</div>
      <a href={`javascript:`} onClick={buttonClick}>Click a</a>
    </div>
  );
}

export default R066_OnClick;