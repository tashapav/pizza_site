import React from "react";
import './MyButton.css'

function MyButton({onClick, children, color}) {
    
    return(
        <button className={`btn ${color}`} onClick={onClick}>{children}</button>
    )
}

export default MyButton