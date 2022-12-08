import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/// TODO: Define props
const Image = (props) => {
  const classes = ["Image", ...(props.additionalClasses || [])].join(" ");

  return (
    <img
      data-testid={props.testID}
      className={`${classes} ${props.size}`}
      data-object-type={props.type}
      src={require(`../../../resources/images/${props.file}`)}
    />
  );
};

Image.propTypes = {
  testID: PropTypes.string,
  file: PropTypes.string,
  type: PropTypes.oneOf(["rounded", "regular"]),
  additionalClasses: PropTypes.array,
  size: PropTypes.oneOf(["small", "medium"]),
};

export default Image;
