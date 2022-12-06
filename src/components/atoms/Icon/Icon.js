import { useState, useEffect } from "react";
import PropTypes, { array, number, string } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/// TODO: Define props
const Icon = (props) => {
  const fontSizes = [
    { size: "xs", class: "main-text-regular-16" },
    { size: "s", class: "main-text-regular-20" },
    { size: "m", class: "main-text-regular-24" },
    { size: "l", class: "main-text-regular-34" },
  ];
  const fontSize = fontSizes.find((size) => size.size == props.size).class;

  let lineHeight = "";
  if (props.type === "item-count") {
    lineHeight = 0;
    for (let i = 0; i < props.textValue.toString().length; i++) {
      lineHeight += 0.5;
    }
  }

  const textValue = props.textValue !== "" ? props.textValue : "";
  const iconValue =
    props.iconValue !== "" ? <FontAwesomeIcon icon={props.iconValue} /> : "";

  return (
    <div
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={`Icon ${props.type} ${props.bgColor} ${props.fgColor} ${fontSize} padding-xs`}
      style={{ lineHeight: `${lineHeight}em` }}
    >
      {iconValue}
      {textValue}
    </div>
  );
};

/// TODO: Adjust and extend
const exceptionClasses = ["default-icon", "circle-icon", "item-count"];
const sizes = ["xs", "s", "m", "l"];

const bgColors = [
  "bg-highlight-dark-50",
  "bg-highlight-light-50",
  "bg-highlight",
  "none",
];
const fgColors = [
  "fg-highlight-dark-50",
  "fg-highlight-light-50",
  "fg-highlight",
  "fg-base-light-50",
];

Icon.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
  size: PropTypes.oneOf(sizes),
  iconValue: PropTypes.string,
  bgColor: PropTypes.oneOf(bgColors),
  fgColor: PropTypes.oneOf(fgColors),
  textValue: PropTypes.number,
};

export default Icon;
