import React from "react";
import "./Block.css"


function Block (props){
    return(
        <div className="Block" onClick={props.onClick}>
            {props.value}
        </div>
    )
}

export default Block