import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

/// TODO: Define props
const Shoppingcart = (props) => {
  const colorPalette =
    props.type === "orange"
      ? "fg-highlight-light-50 bg-highlight"
      : "bg-highlight-light-50 fg-highligh-dark-50";

  return (
    <div
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={`Shoppingcart   ${colorPalette} main-text-regular-34 padding-s`}
    >
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
};

/// TODO: Adjust and extend
const exceptionClasses = ["orange", "black"];

Shoppingcart.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
};

export default Shoppingcart;
