import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Label = ({ text, additionalClasses, testID, exceptionType }) => {
  const classes = ["Label", ...(additionalClasses || [])].join(" ");

  return (
    <div
      data-testid={testID}
      className={classes}
      data-object-type={exceptionType}
    >
      {text}
    </div>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  testID: PropTypes.string,
  additionalClasses: PropTypes.array,
  exceptionType: PropTypes.string,
};

export default Label;
