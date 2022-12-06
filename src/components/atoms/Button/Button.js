import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

const Button = (props) => {
  const classes = ["Button", ...(props.additionalClasses || [])].join(" ");

  return (
    <button data-testid={props.testID} className={classes}>
      {props.text}
    </button>
  );
};

const utilityClasses = [
  "bg-highlight",
  "fg-highlight-light-50",
  "main-text-bold-12",
];

Button.propTypes = {
  testID: PropTypes.string,
  additionalClasses: PropTypes.oneOf(utilityClasses),
  text: PropTypes.string,
};

export default Button;
