import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/// TODO: Define props
const Price = (props) => {
  const price = props.amount.toFixed(2);
  const array = price.split(".");
  const euro = array[0];
  const cents = array[1];

  const euroSize =
    props.size === "regular" ? "main-text-bold-20" : "main-text-bold-28";
  const centsSize =
    props.size === "regular" ? "main-text-bold-12" : "main-text-bold-20";

  const classes = ["Price", ...(props.additionalClasses || [])].join(" ");

  return (
    <span
      data-testid={props.testID}
      className={classes}
      data-object-type={props.type}
    >
      <span className="price-text">
        <span className={`euro ${euroSize}`}>{euro}</span>
        <span className={`cents ${centsSize}`}>.{cents}</span>
      </span>
    </span>
  );
};

const sizes = ["regular", "large"];

Price.propTypes = {
  testID: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  amount: PropTypes.number,
  additionalClasses: PropTypes.array,
  type: PropTypes.oneOf(["align-left", "align-right"]),
};

export default Price;
