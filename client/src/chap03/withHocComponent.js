import React, {useEffect} from 'react';

function WithHocComponent(InComponent, InComponentName) {
  return function OutComponent(innerProps) {

    useEffect(() => {
      console.log(`3. InComponentName : ${InComponentName}`)
    }, []);

    console.log(`1. InComponent render`)

    return (
      <InComponent {...innerProps} />
    )
  }
}

export default WithHocComponent;