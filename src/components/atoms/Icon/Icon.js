import { useState, useEffect } from "react";
import PropTypes, { array } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faFloppyDisk,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { faSpotify, faInstagram } from "@fortawesome/free-brands-svg-icons";

/// TODO: Define props
const Icon = (props) => {
  const backgroundColors = [
    { color: "orange", class: " bg-highlight" },
    { color: "black", class: " bg-highlight-dark-50" },
    { color: "white", class: "bg-highlight-light-50" },
    { color: "none", class: "" },
  ];
  const backgroundColor = backgroundColors.find(
    (color) => color.color == props.bgColor
  ).class;

  const textColors = [
    { color: "white", class: "fg-highlight-light-50" },
    { color: "black", class: " fg-highlight-dark-50" },
    { color: "grey", class: "fg-base-light-50" },
    { color: "orange", class: "fg-highlight" },
  ];
  const textColor = textColors.find(
    (color) => color.color == props.fgColor
  ).class;

  const iconValues = [
    { value: "shoppingcart", icon: faShoppingCart },
    { value: "save", icon: faFloppyDisk },
    { value: "spotify", icon: faSpotify },
    { value: "instagram", icon: faInstagram },
    { value: "arrow-right", icon: faArrowRightLong },
  ];
  const iconValue = iconValues.find((value) => value.value == props.value).icon;

  const fontSizes = [
    { size: "xs", class: "main-text-regular-16" },
    { size: "s", class: "main-text-regular-20" },
    { size: "m", class: "main-text-regular-24" },
    { size: "l", class: "main-text-regular-34" },
  ];
  const fontSize = fontSizes.find((size) => size.size == props.size).class;

  return (
    <div
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={`Icon ${props.type} ${backgroundColor} ${textColor} ${fontSize} padding-xs`}
    >
      <FontAwesomeIcon icon={iconValue} />
    </div>
  );
};

/// TODO: Adjust and extend
const exceptionClasses = ["footer-icon", "circle-icon", "arrow-right"];
const sizes = ["xs", "s", "m", "l"];
const values = ["shoppingcart", "save", "spotify", "instagram", "arrow-right"];
const colors = ["black", "white", "orange", "grey", "none"];

Icon.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
  size: PropTypes.oneOf(sizes),
  value: PropTypes.oneOf(values).isRequired,
  bgColor: PropTypes.oneOf(colors),
  fgColor: PropTypes.oneOf(colors),
};

export default Icon;
