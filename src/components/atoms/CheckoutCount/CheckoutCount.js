import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/// TODO: Define props
const CheckoutCount = (props) => {
  let lineHeight = 0;
  for (let i = 0; i < props.value.length; i++) {
    lineHeight += 0.5;
  }

  return (
    <div
      data-testid={props.testID}
      className={`CheckoutCount bg-highlight fg-highlight-light-50 padding-xs main-text-regular-16`}
      style={{ lineHeight: `${lineHeight}em` }}
    >
      {props.value}
    </div>
  );
};

CheckoutCount.propTypes = {
  testID: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default CheckoutCount;
