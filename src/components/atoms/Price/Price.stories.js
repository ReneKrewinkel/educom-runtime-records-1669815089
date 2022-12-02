import React from "react";
import Price from "./Price";

const PriceMeta = {
  title: "atoms/Price",
  component: Price,
  argTypes: {
    testID: { table: { disable: true } },
    size: { name: "Size" },
    amount: { name: "Amount" },
  },
};

const testID = "Price-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Price {...args} />;

export const DefaultPrice = Template.bind({});
DefaultPrice.args = {
  testID: testID,
  size: "regular",
  amount: 22.5,
};

export const LargerPrice = Template.bind({});
LargerPrice.args = { testID: testID, size: "large", amount: 22.5 };

export default PriceMeta;
