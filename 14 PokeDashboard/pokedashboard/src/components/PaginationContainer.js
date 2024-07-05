import React from "react";
import { Pagination,PageItem,Col } from "react-bootstrap";

const PaginationContainer=({totalPages, btnSize, activePage, onSelect}) => {
    
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <PageItem key={number} active={number === activePage} onClick={(event) => onSelect(event)}>
          {number}
        </PageItem>,
      );
    }

    return (
        <Col sm={12}>
            {totalPages > 1 ?
                <Pagination size={btnSize}>
                    {items}
                </Pagination>
                : null 
            }
        </Col>
    )
}

export default PaginationContainer;