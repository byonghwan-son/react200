import React, {useEffect} from 'react';
import Swal from "sweetalert2";

function R056_Sweetalert2Basic(props) {

  useEffect(() => {
    Swal.fire('1. SweetAlert')
      .then(result => {
        alert(`2. result.value : ${result.value}`)
      })
  }, []);

  return (
    <h1>
      SweetAlert2
    </h1>
  );
}

export default R056_Sweetalert2Basic;