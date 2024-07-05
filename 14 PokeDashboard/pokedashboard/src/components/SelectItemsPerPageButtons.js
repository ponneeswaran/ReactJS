import React from "react";
import { Button, Col } from "react-bootstrap";

const SelectItemsPerPageButtons = ({options, onOptionsSelected, selectedValue, allValue}) => {
    return (
        <Col sm={12} >
            {options.map((option)=>{
                return <Button key={option} onClick={onOptionsSelected} className={selectedValue === option?'active':'light'}>
                    {option}
                </Button>
            })}
            {allValue?<Button key={allValue} onClick={onOptionsSelected} className={selectedValue === allValue?'active':'light'}>All</Button>: false}
        </Col>
    )
}

export default SelectItemsPerPageButtons;