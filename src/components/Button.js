import React from "react";

function Button ({ text, clickHandler }) {
    return (
        <button onClick={clickHandler}>
            {text}
        </button>
    )
}

export default Button;

// function Button needs to take in clickHandler as a prop then be executed onClick