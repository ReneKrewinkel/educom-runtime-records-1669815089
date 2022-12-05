import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

/// TODO: Define props
const Arrow_right = (props) => {
  const fontSize =
    props.size === "small" ? "main-text-regular-24" : "main-text-regular-34";
  const color =
    props.type === "orange" ? "fg-highlight" : "fg-highlight-light-50";

  return (
    <div
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={`Arrow_right ${fontSize} ${color} `}
    >
      <FontAwesomeIcon icon={faArrowRightLong} />
    </div>
  );
};

const sizes = ["small", "large"];
const exceptionClasses = ["orange", "white"];

Arrow_right.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
  size: PropTypes.oneOf(sizes),
};

export default Arrow_right;
