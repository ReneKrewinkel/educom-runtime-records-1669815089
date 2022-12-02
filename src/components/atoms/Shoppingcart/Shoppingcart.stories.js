import React from "react";
import Shoppingcart from "./Shoppingcart";

const ShoppingcartMeta = {
  title: "atoms/Shoppingcart",
  component: Shoppingcart,
  argTypes: {
    testID: { table: { disable: true } },
    type: { name: "Type" },
  },
};

const testID = "Shoppingcart-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Shoppingcart {...args} />;

export const OrangeShoppingcart = Template.bind({});
OrangeShoppingcart.args = {
  testID: testID,
  type: "orange",
};

export const BlackShoppingcart = Template.bind({});
BlackShoppingcart.args = {
  testID: testID,
  type: "black",
};

export default ShoppingcartMeta;
