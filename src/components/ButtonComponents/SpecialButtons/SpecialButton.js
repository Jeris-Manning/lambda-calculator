import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="calcButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.specials}
    </button>
  );
};

export default SpecialButton