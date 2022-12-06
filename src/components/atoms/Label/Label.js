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

const utilityClasses = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "fg-highlight",
  "fg-highlight-light-50",
  "fg-highlight-dark-50",
  "fg-base-light-50",
  "main-text-bold-12",
];

Label.propTypes = {
  text: PropTypes.string.isRequired,
  testID: PropTypes.string,
  additionalClasses: PropTypes.arrayOf(PropTypes.oneOf(utilityClasses)),
};

export default Label;
