import React from 'react';
import Swal from "sweetalert2";

function R058_Sweetalert2Confirm(props) {
  let deleteAlert = (e) => {
    Swal.fire({
      title: '정말 삭제하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#4B088A',
      cancelButtonColor: '#01Df01',
      confirmButtonText: '예',
      cancelButtonText: '아니요'
    }).then(result => {
      if(result.value) {
        let item = document.getElementById('deletedId')
        if(item) {
          item.remove()
          Swal.fire(
            'Deleted',
            'Sweetalert2 삭제 완료',
            'success'
          )
        }
      }
    })
  }

  return (
    <div id={`deletedId`}>
      <h1>Sweet Alert 2</h1>
      <button onClick={e => deleteAlert(e)}>삭제</button>
    </div>
  );
}

export default R058_Sweetalert2Confirm;