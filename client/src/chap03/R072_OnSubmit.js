import React from 'react';

function R072_OnSubmit(props) {
  let Submit = (e) => {
    let inputValue = document.getElementById('inputId').value
    console.log(`inputValue : ${inputValue}`)
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={e => Submit(e)}>
        <input type="text" name={`inputName`} id={`inputId`}/>
        <input type="submit" value={`Submit`}/>
      </form>
    </>
  );
}

export default R072_OnSubmit;