import React from "react";
import Arrow_right from "./Arrow_right";

const Arrow_rightMeta = {
  title: "atoms/Arrow_right",
  component: Arrow_right,
  argTypes: {
    testID: { table: { disable: true } },
    size: { name: "Size" },
    type: { name: "Type" },
  },
};

const testID = "Arrow_right-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Arrow_right {...args} />;

export const WhiteArrow_right = Template.bind({});
WhiteArrow_right.args = {
  testID: testID,
  size: "large",
  type: "white",
};

export const OrangeArrow_right = Template.bind({});
OrangeArrow_right.args = {
  testID: testID,
  size: "small",
  type: "orange",
};

export default Arrow_rightMeta;
