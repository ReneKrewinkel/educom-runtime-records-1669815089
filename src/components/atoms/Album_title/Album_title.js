import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/// TODO: Define props
const Album_title = (props) => {
  const fontSize = () => {
    if (props.size === "large") {
      return "h2";
    } else if (props.size === "medium") {
      return "h5";
    } else {
      return "h6";
    }
  };
  const color =
    props.type === "hero" ? "fg-highlight-light-50" : "fg-highlight-dark-50";
  return (
    <div
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={`Album_title ${fontSize()} ${color}`}
    >
      {props.text}
    </div>
  );
};

const sizes = ["small", "medium", "large"];
const exceptionClasses = ["hero", "regular"];

Album_title.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
  size: PropTypes.oneOf(sizes),
  text: PropTypes.string,
};

export default Album_title;
