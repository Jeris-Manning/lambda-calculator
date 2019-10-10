import React from "react";

const NumberButton = (props) => {
  return (
    <button onClick={props.clickNumberButton} className="calcButton numberKey"> 
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </button>
  );
};

export default NumberButton;