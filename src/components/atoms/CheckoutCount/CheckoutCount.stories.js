import React from "react";
import CheckoutCount from "./CheckoutCount";

const CheckoutCountMeta = {
  title: "atoms/CheckoutCount",
  component: CheckoutCount,
  argTypes: {
    testID: { table: { disable: true } },
    value: { name: "Value" },
  },
};

const testID = "CheckoutCount-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <CheckoutCount {...args} />;

export const DefaultCheckoutCount = Template.bind({});
DefaultCheckoutCount.args = {
  testID: testID,
  value: 3,
};

export default CheckoutCountMeta;
