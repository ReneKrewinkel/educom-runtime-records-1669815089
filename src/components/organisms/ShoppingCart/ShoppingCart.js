import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Item from "../../molecules/Item/Item";
import ItemTotal from "../../molecules/ItemTotal/ItemTotal";
import Label from "../../atoms/Label/Label";
import CallToAction from "../../molecules/CallToAction/CallToAction";

/// TODO: Define props
const ShoppingCart = (props) => {
  return (
    <div data-testid={props.testID} className={"ShoppingCart"}>
      <Label
        text={"shopping cart"}
        additionalClasses={["h2", "fg-highlight-dark-50", "padding-block-xs"]}
      />
      <Item
        additionalClasses={[
          "flex",
          "align-items-center",
          "justify-content-space-between",
          "padding-block-s",
        ]}
      />
      <Item
        additionalClasses={[
          "flex",
          "align-items-center",
          "justify-content-space-between",
          "padding-block-s",
        ]}
      />
      <Item
        additionalClasses={[
          "flex",
          "align-items-center",
          "justify-content-space-between",
          "padding-block-s",
        ]}
      />
      <ItemTotal
        additionalClasses={[
          "flex",
          "align-items-center",
          "justify-content-space-between",
          "padding-block-m",
        ]}
      />
      <div className="CallToAction-container padding-block-s">
        <CallToAction
          additionalClasses={["align-items-center", "padding-xs"]}
          labelValue={"add to cart"}
          colorPalette={"highlight"}
          type={"regular"}
        />
      </div>
    </div>
  );
};

ShoppingCart.propTypes = {
  testID: PropTypes.string,
};

export default ShoppingCart;
