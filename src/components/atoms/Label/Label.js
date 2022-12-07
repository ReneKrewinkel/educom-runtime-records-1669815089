import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Label = ({ text, additionalClasses, testID }) => {
  const classes = ["Label", ...(additionalClasses || [])].join(" ");

  return (
    <span data-testid={testID} className={classes}>
      {text}
    </span>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  testID: PropTypes.string,
  additionalClasses: PropTypes.array,
};

export default Label;
