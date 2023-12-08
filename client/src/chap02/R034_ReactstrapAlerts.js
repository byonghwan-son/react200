import React from 'react';
import {Alert, UncontrolledAlert} from "reactstrap";


function R034_ReactstrapAlerts(props) {
    return (
        <>
            <div style={{padding: '0px'}}>
                <Alert color={'light'}>
                    Simple Alert [color : light]
                </Alert>
                <UncontrolledAlert color={'warning'}>
                    Uncontrolled Alert [color : warning]
                </UncontrolledAlert>
            </div>
        </>
    );
}

export default R034_ReactstrapAlerts;