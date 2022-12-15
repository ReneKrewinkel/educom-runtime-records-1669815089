import React from "react";
import ShoppingCart from "./ShoppingCart";

const ShoppingCartMeta = {
  title: "organisms/ShoppingCart",
  component: ShoppingCart,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "ShoppingCart-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <ShoppingCart {...args} />;

export const DefaultShoppingCart = Template.bind({});
DefaultShoppingCart.args = {
  testID: testID,
};

export default ShoppingCartMeta;
