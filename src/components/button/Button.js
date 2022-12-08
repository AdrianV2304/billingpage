import React from "react";

const Button = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      Remove
    </button>
  );
};

export default Button;
