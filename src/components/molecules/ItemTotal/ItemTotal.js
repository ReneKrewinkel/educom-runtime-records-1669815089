import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Label from "../../atoms/Label/Label";
import Price from "../../atoms/Price/Price";

/// TODO: Define props
const ItemTotal = (props) => {
  const classes = ["ItemTotal", ...(props.additionalClasses || [])].join(" ");

  return (
    <div data-testid={props.testID} className={classes}>
      <Label
        text={"total order"}
        additionalClasses={["fg-highlight-dark-50", "h3"]}
      />
      <Price
        size={"large"}
        amount={22.5}
        additionalClasses={[
          "fg-highlight-light-50",
          " bg-highlight ",
          "default-box-shadow",
        ]}
      />
    </div>
  );
};

ItemTotal.propTypes = {
  testID: PropTypes.string,
  additionalClasses: PropTypes.array,
};

export default ItemTotal;
