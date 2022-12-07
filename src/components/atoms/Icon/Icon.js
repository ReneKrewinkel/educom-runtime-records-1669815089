import { useState, useEffect } from "react";
import PropTypes, { array, number, string } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../config/Icons";

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
    props.iconValue === undefined ? (
      ""
    ) : (
      <FontAwesomeIcon icon={props.iconValue} />
    );

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

Icon.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
  additionalClasses: PropTypes.array,
  iconValue: PropTypes.array,
  textValue: PropTypes.number,
};

export default Icon;
