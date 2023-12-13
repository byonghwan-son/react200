import React, {useEffect, useState} from 'react';
import {Progress} from "reactstrap";

function R052_ReactstrapProgress(props) {

  const [progress, setProgress] = useState(0)
  const [timer, setTimer] = useState(null)

  // componentDidUpdate 메소드와 동일한 효과를 냄.
  // state가 변경될 때마다 해당 메소드를 실행함.
  useEffect(() => {
    progressing()
  }, [progress]);

  let progressing = () => {
    if(progress !== 100) {
      setTimer(setTimeout(() =>{
        setProgress(progress + 1)
        clearTimeout(timer)
        // progressing()
      }, 100))
    }
    else {
      setTimer(null)
    }
  }

  return (
    <>
      <Progress color={`info`} value={progress}>
        {progress}%
      </Progress><br/>
      <Progress multi>
        <Progress bar color={`warning`} value={25}>25%</Progress>
        <Progress bar color={`success`} value={25}>Wow!</Progress>
        <Progress bar value={15}>Meh</Progress>
        <Progress bar color={`danger`} value={25}>Look OUT!!</Progress>
      </Progress>
    </>
  );
}

export default R052_ReactstrapProgress;