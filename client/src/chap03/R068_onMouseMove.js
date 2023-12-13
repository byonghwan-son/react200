import React from 'react';

function R068_OnMouseMove(props) {
  let MouseMove = (tag) => {
    console.log(`TAG : ${tag}`)
  }

  return (
    <>
      <div onMouseMove={e => MouseMove('div')}>
        <h3>DIV onMouseMove</h3>
      </div>
      <input type="text" onMouseMove={e => MouseMove('input')}/>
      <select onMouseMove={e => MouseMove('select')}>
        <option value={`react`}>react</option>
        <option value={`200`}>200</option>
      </select>
    </>
  );
}

export default R068_OnMouseMove;