import React from 'react';
import {Badge, Button} from "reactstrap";

function R035_ReactstrapBadges(props) {
  return (
    <>
      <div style={{padding: '0px'}}>
        <h1>PRODUCT NAME <Badge color={`secondary`}>hit</Badge></h1>
        <Button color={`light`} outline>
          Accessor <Badge color={`dark`}>4</Badge>
        </Button>
        <Badge color={`danger`} pill>pill</Badge>
        <Badge href={`https://example.com`} color={`light`}>GoLink</Badge>
      </div>
    </>
  );
}

export default R035_ReactstrapBadges;