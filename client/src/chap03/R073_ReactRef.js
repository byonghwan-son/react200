import React, {useRef} from 'react';

function R073_ReactRef(props) {

  const InputRef = useRef();

  let RefFocus = (e) => {
    InputRef.current.focus()
  }

  let JavascriptFocus = () => {
    document.getElementById('id').focus()
  }

  return (
    <>
      <input type="text" id={`id`} ref={InputRef}/>
      <input type="button" value={`Ref Focus`} onClick={RefFocus}/>
      <input type="button" value={`Javascript Focus`} onClick={JavascriptFocus}/>
    </>
  );
}

export default R073_ReactRef;