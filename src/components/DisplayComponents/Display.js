import React, {useState} from "react";

const Display = (props) => {
  const [onScreen, setOnScreen] = useState(0);
  return <div className="calcDisplay">{onScreen}</div>;
};

export default Display