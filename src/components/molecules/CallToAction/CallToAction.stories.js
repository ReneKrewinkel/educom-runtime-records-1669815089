import React from "react";
import CallToAction from "./CallToAction";

const CallToActionMeta = {
  title: "molecules/CallToAction",
  component: CallToAction,
  argTypes: {
    testID: { table: { disable: true } },
    additionalClasses: { name: "AdditionalClasses" },
    labelValue: { name: "LabelValue" },
    colorPalette: { name: "Colorpalette" },
    type: { name: "Type" },
  },
};

const testID = "CallToAction-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <CallToAction {...args} />;

export const DefaultCallToAction = Template.bind({});
DefaultCallToAction.args = {
  testID: testID,
  additionalClasses: ["align-items-center", "padding-xs"],
  labelValue: "add to cart",
  colorPalette: "highlight",
  type: "regular",
};

export const ShortCallToAction = Template.bind({});
ShortCallToAction.args = {
  testID: testID,
  additionalClasses: ["align-items-center", "padding-xs"],
  colorPalette: "dark",
  type: "no-label",
};

export default CallToActionMeta;
