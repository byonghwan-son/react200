import React from 'react';

function R074_ReactCurrying(props) {

  let PlusNumOrString = (c, d) => c + d

  let PlusFunc1 = (a) => {
    return (b) => {
      return PlusNumOrString(a, b)
    }
  }

  let PlusFunc2 = a => b => PlusNumOrString(a, b)

  let PlusFunc = (a) => PlusFunc1(a)(200)

  return (
    <>
      <input type="button" value={`NumberPlus`} onClick={e => alert(PlusFunc(100))}/>
      <input type="button" value={`StringPlus`} onClick={e => alert(PlusFunc('react'))}/>
    </>
  );
}

export default R074_ReactCurrying;