import React from "react";
// import Specials from './Specials';

const SpecialButton = (props) => {
  return (
    <button onClick={props.clickSpecialButton} className="calcButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.special}
    </button>
  );
};

export default SpecialButton