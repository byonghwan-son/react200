import React from 'react';
import {Badge, ListGroup, ListGroupItem} from "reactstrap";

function R047_ReactstrapListGroup(props) {
  return (
    <>
      <ListGroup>
        <ListGroupItem color={`danger`} className={`justify-content-between`}>Badge
          <Badge pill>200</Badge>
        </ListGroupItem>
        <ListGroupItem disabled tag={`a`} href={`#`}>Disable</ListGroupItem>
        <ListGroupItem tag={`a`} href={`http://example.com`}>Link</ListGroupItem>
        <ListGroupItem tag={`button`} action onClick={e => alert('button')}>Button</ListGroupItem>
      </ListGroup>
    </>
  );
}

export default R047_ReactstrapListGroup;