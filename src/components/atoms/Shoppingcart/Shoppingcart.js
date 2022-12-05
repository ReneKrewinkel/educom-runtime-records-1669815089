import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

/// TODO: Define props
const Shoppingcart = (props) => {
  const colorPalette = () => {
    if (props.type === "orange") {
      return "fg-highlight-light-50 bg-highlight";
    } else if (props.type === "black") {
      return "fg-highlight-light-50 bg-highlight-dark-50";
    } else {
      return "bg-highlight-light-50 fg-highlight-dark-50";
    }
  };
  const size =
    props.size === "small" ? "main-text-regular-16 " : "main-text-regular-24 ";

  return (
    <div
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={`Shoppingcart  ${colorPalette()} ${size} padding-xs`}
    >
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
};

/// TODO: Adjust and extend
const exceptionClasses = ["orange", "black", "white"];
const sizes = ["small", "large"];

Shoppingcart.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
  size: PropTypes.oneOf(sizes),
};

export default Shoppingcart;
