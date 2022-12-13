import React from "react";
import Price from "./Price";

const PriceMeta = {
  title: "atoms/Price",
  component: Price,
  argTypes: {
    testID: { table: { disable: true } },
    size: { name: "Size" },
    amount: { name: "Amount" },
    additionalClasses: { name: "AdditionalClasses" },
    type: { name: "Type" },
  },
};

const testID = "Price-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Price {...args} />;

export const DefaultPrice = Template.bind({});
DefaultPrice.args = {
  testID: testID,
  size: "regular",
  amount: 22.5,
  additionalClasses: [
    "fg-highlight-light-50",
    " bg-highlight ",
    "default-box-shadow",
  ],
};

export const LargerPrice = Template.bind({});
LargerPrice.args = {
  testID: testID,
  size: "large",
  amount: 22.5,
  additionalClasses: [
    "fg-highlight-light-50",
    " bg-highlight ",
    "default-box-shadow",
  ],
};

export default PriceMeta;
