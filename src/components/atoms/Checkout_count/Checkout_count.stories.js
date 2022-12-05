import React from "react";
import Checkout_count from "./Checkout_count";

const Checkout_countMeta = {
  title: "atoms/Checkout_count",
  component: Checkout_count,
  argTypes: {
    testID: { table: { disable: true } },
    value: { name: "Value" },
  },
};

const testID = "Checkout_count-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Checkout_count {...args} />;

export const DefaultCheckout_count = Template.bind({});
DefaultCheckout_count.args = {
  testID: testID,
  value: 3,
};

export default Checkout_countMeta;
