import React from 'react';

function R070_OnMouseOut(props) {
  let MouseOut = (tag) => {
    console.log(`TAG : ${tag}`)
  }

  return (
    <>
      <div onMouseOut={e => MouseOut('div')}>
        <h3>DIV onMouseOver</h3>
      </div>
      <input type="text" onMouseOut={e => MouseOut('input')}/>
      <select onMouseOut={e => MouseOut('select')}>
        <option value={`react`}>react</option>
        <option value={`200`}>200</option>
      </select>
    </>
  );
}

export default R070_OnMouseOut;