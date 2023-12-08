import React from 'react';

function R033_ReturnMap(props) {
    const element_Array= [
        <li>react</li>
        , <li>200</li>
        , <li>Array map</li>
    ]

    return (
        <>
            <ul>
                {element_Array.map((item) => item)}
            </ul>
        </>
    );
}

export default R033_ReturnMap;