import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/// TODO: Define props
const Input = (props) => {
  const fontSize = props.size === "large" ? "main-text-bold-28" : "";
  return (
    <div
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={` ${fontSize} `}
    >
      <input
        className="Input light-box-shadow "
        type="text"
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!
const sizes = ["large"];

/// TODO: Adjust and extend

Input.propTypes = {
  testID: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  placeholder: PropTypes.string,
};

export default Input;
