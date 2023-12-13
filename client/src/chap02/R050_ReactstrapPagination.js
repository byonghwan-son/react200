import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

function R050_ReactstrapPagination(props) {

  let pagenation  = (type) => alert('Go ' + type)

  return (
    <>
      <Pagination size={`md`} aria-label={`Page navigation example`}>
        <PaginationItem>
          <PaginationLink first onClick={e => pagenation('first')} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous onClick={e => pagenation('previous')} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={e => pagenation('1')}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={e => pagenation('2')}>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next onClick={e => pagenation('next')} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last onClick={e => pagenation('last')} />
        </PaginationItem>
      </Pagination>
    </>
  );
}

export default R050_ReactstrapPagination;