import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Item from "../../molecules/Item/Item";
import ItemTotal from "../../molecules/ItemTotal/ItemTotal";
import Label from "../../atoms/Label/Label";
import CallToAction from "../../molecules/CallToAction/CallToAction";
import CartContext from "../../../contexts";
/// TODO: Define props
const ShoppingCart = (props) => {
  const { items } = useContext(CartContext);

  return (
    <div data-testid={props.testID} className={"ShoppingCart"}>
      <Label
        text={"shopping cart"}
        additionalClasses={["h2", "fg-highlight-dark-50", "padding-block-xs"]}
      />
      {items.map((item) => (
        <Item
          additionalClasses={[
            "flex",
            "align-items-center",
            "justify-content-space-between",
            "padding-block-s",
          ]}
          data={item}
        />
      ))}

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
