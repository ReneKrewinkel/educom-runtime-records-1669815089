import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/// TODO: Define props
const Button = (props) => {
  return (
    <button
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={`Button ${props.size} bg-highlight fg-highlight-light-50 main-text-bold-12`}
    >
      Read more
    </button>
  );
};

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!
const sizes = ["small", "medium", "large"];

/// TODO: Adjust and extend
const exceptionClasses = ["button", "regular"];

Button.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
  size: PropTypes.oneOf(sizes),
};

export default Button;
