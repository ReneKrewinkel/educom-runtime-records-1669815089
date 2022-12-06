import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const classes = ["Input", ...(props.additionalClasses || [])].join(" ");

  return (
    <div data-testid={props.testID}>
      <input
        className={classes}
        type="text"
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

const utilityClasses = ["main-text-bold-28", "light-box-shadow"];

Input.propTypes = {
  testID: PropTypes.string,
  additionalClasses: PropTypes.oneOf(utilityClasses),
  placeholder: PropTypes.string,
};

export default Input;
