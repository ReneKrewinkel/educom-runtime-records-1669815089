import { useState, useEffect } from "react";
import PropTypes, { array, number, string } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/// TODO: Define props
const Icon = (props) => {
  const classes = ["Icon", ...(props.additionalClasses || [])].join(" ");

  let lineHeight = "";
  if (props.type === "item-count") {
    lineHeight = 0;
    for (let i = 0; i < props.textValue.toString().length; i++) {
      lineHeight += 0.5;
    }
  }

  const iconValue =
    props.iconValue !== "" ? <FontAwesomeIcon icon={props.iconValue} /> : "";

  return (
    <div
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={classes}
      style={{ lineHeight: `${lineHeight}em` }}
    >
      {iconValue}
      {props.textValue ?? ""}
    </div>
  );
};

/// TODO: Adjust and extend
const exceptionClasses = ["default-icon", "circle-icon", "item-count"];

const utilityClasses = [
  "bg-highlight-dark-50",
  "bg-highlight-light-50",
  "bg-highlight",
  "fg-highlight-dark-50",
  "fg-highlight-light-50",
  "fg-highlight",
  "fg-base-light-50",
  "main-text-regular-16",
  "main-text-regular-20",
  "main-text-regular-24",
  "main-text-regular-34",
  "padding-xs",
];

Icon.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
  additionalClasses: PropTypes.oneOf(utilityClasses),
  iconValue: PropTypes.string,
  textValue: PropTypes.number,
};

export default Icon;
