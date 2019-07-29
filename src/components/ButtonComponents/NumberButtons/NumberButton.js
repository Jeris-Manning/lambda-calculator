import React from "react";

const NumberButton = (props) => {
  return (
    <button className="calcButton numberKey"> 
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.numbers}
    </button>
  );
};

export default NumberButton