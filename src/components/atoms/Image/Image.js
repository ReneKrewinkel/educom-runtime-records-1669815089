import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/// TODO: Define props
const Image = (props) => {
  const classes = ["Image", ...(props.additionalClasses || [])].join(" ");

  return (
    <img
      data-testid={props.testID}
      className={classes}
      data-object-type={props.type}
      src={require(`../../../resources/images/${props.file}`)}
    />
  );
};
const utilityClasses = ["light-box-shadow"];

Image.propTypes = {
  testID: PropTypes.string,
  file: PropTypes.string.isRequired,
  type: PropTypes.oneOf("rounded", "regular"),
  additionalClasses: PropTypes.oneOf(utilityClasses),
};

export default Image;
