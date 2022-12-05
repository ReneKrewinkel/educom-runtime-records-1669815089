import React from "react";
import Icon from "./Icon";

const IconMeta = {
  title: "atoms/Icon",
  component: Icon,
  argTypes: {
    testID: { table: { disable: true } },
    bgColor: { name: "BgColor" },
    size: { name: "Size" },
    value: { name: "Value" },
    type: { name: "Type" },
  },
};

const testID = "Icon-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Icon {...args} />;

export const OrangeShoppingcartIcon = Template.bind({});
OrangeShoppingcartIcon.args = {
  testID: testID,
  bgColor: "orange",
  fgColor: "white",
  size: "xs",
  value: "shoppingcart",
  type: "circle-icon",
};

export const BlackShoppingcartIcon = Template.bind({});
BlackShoppingcartIcon.args = {
  testID: testID,
  bgColor: "black",
  fgColor: "white",
  size: "m",
  value: "shoppingcart",
  type: "circle-icon",
};
export const WhiteShoppingcartIcon = Template.bind({});
WhiteShoppingcartIcon.args = {
  testID: testID,
  bgColor: "white",
  fgColor: "black",
  size: "m",
  value: "shoppingcart",
  type: "circle-icon",
};
export const SaveIcon = Template.bind({});
SaveIcon.args = {
  testID: testID,
  bgColor: "black",
  fgColor: "white",
  size: "m",
  value: "save",
  type: "circle-icon",
};
export const SpotifyIcon = Template.bind({});
SpotifyIcon.args = {
  testID: testID,
  bgColor: "black",
  fgColor: "white",
  size: "m",
  value: "spotify",
  type: "circle-icon",
};

export const FooterIcon = Template.bind({});
FooterIcon.args = {
  testID: testID,
  bgColor: "none",
  fgColor: "grey",
  size: "m",
  value: "instagram",
  type: "footer-icon",
};

export const LargerArrowIcon = Template.bind({});
LargerArrowIcon.args = {
  testID: testID,
  bgColor: "none",
  fgColor: "white",
  size: "l",
  value: "arrow-right",
  type: "arrow-right",
};
export const SmallerArrowIcon = Template.bind({});
SmallerArrowIcon.args = {
  testID: testID,
  bgColor: "none",
  fgColor: "orange",
  size: "m",
  value: "arrow-right",
  type: "arrow-right",
};

export default IconMeta;
