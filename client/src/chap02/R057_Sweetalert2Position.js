import React from 'react';
import Swal from "sweetalert2";

function R057_Sweetalert2Position(props) {

  let saveAlert = (flag, positionFlag) => {
    Swal.fire({
      position: `{positionFlag}` ,
      icon: 'success',
      title: flag + '되었습니다.',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <>
     <h1>Sweet Alert 2</h1>
     <button onClick={e => saveAlert('저장', 'center')}>저장</button>
     <button onClick={e => saveAlert('수정', 'bottom-end')}>수정</button>
    </>
  );
}

export default R057_Sweetalert2Position;