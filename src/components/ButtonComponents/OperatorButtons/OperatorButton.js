import React from "react";
// import {operators} from '../../../data';

const OperatorButton = (props) => {
  return (
    <button onClick={props.clickOperatorButton} className="calcButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operator.char}
    </button>
  );
};

export default OperatorButton
