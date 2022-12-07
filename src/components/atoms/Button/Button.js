import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const classes = ["Button", ...(props.additionalClasses || [])].join(" ");

  return (
    <button data-testid={props.testID} className={classes}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  testID: PropTypes.string,
  additionalClasses: PropTypes.array,
  text: PropTypes.string,
};

export default Button;
