import React from 'react';

function R069_OnMouseOver(props) {
  let MouseOver = (tag) => {
    console.log(`TAG : ${tag}`)
  }

  return (
    <>
      <div onMouseOver={e => MouseOver('div')}>
        <h3>DIV onMouseOver</h3>
      </div>
      <input type="text" onMouseOver={e => MouseOver('input')}/>
      <select onMouseOver={e => MouseOver('select')}>
        <option value={`react`}>react</option>
        <option value={`200`}>200</option>
      </select>
    </>
  );
}

export default R069_OnMouseOver;