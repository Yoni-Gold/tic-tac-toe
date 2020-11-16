import React , {useState} from 'react';

function GridCell(props) {
    return <div onClick={e => {e.target.parentElement.click()}} style={props.value === "z" ? {color: "transparent"} : {color: "black"}} value={props.value}>{props.value}</div>
}

export default GridCell;