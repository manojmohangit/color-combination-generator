import React from "react";
import "./Box.css";

let Box = function(props) {
    const boxStyle = {
        backgroundColor: props.backgroundColor,
        width: props.width + "%"
    }
    
    return (
        <div className="box" style={boxStyle}>
            <div className="color-content">
                <div className="content">
                    {props.backgroundColor.toString().toUpperCase()}
                </div>
            </div>
        </div>
    )
}

Box.defaultProps = {
    backgroundColor: "black"
}

export default Box;