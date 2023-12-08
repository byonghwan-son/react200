import React, {useEffect, useState} from 'react';

function R031_ReactHook(props) {
    const [contents, setContents] = useState('[THIS IS React]')
    useEffect(() => {
        console.log('useEffect')
    });
    return (
        <div style={{padding: '0px'}}>
            <h2>{contents}</h2>
            <button onClick={(e) => { setContents('[THIS IS Hook]') }}>버튼</button>
        </div>
    );
}

export default R031_ReactHook;