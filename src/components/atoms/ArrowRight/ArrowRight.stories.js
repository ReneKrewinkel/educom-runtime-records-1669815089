import React from "react";
import ArrowRight from "./ArrowRight";

const ArrowRightMeta = {
  title: "atoms/ArrowRight",
  component: ArrowRight,
  argTypes: {
    testID: { table: { disable: true } },
    size: { name: "Size" },
    type: { name: "Type" },
  },
};

const testID = "ArrowRight-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <ArrowRight {...args} />;

export const WhiteArrowRight = Template.bind({});
WhiteArrowRight.args = {
  testID: testID,
  size: "large",
  type: "white",
};

export const OrangeArrowRight = Template.bind({});
OrangeArrowRight.args = {
  testID: testID,
  size: "small",
  type: "orange",
};

export default ArrowRightMeta;
