import React from "react";
import Icon from "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconMeta = {
  title: "atoms/Icon",
  component: Icon,
  argTypes: {
    testID: { table: { disable: true } },
    bgColor: { name: "BgColor" },
    size: { name: "Size" },
    iconValue: { name: "IconValue" },
    type: { name: "Type" },
    textValue: { name: "TextValue" },
  },
};

const testID = "Icon-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Icon {...args} />;

export const OrangeShoppingcartIcon = Template.bind({});
OrangeShoppingcartIcon.args = {
  testID: testID,
  bgColor: "bg-highlight",
  fgColor: "fg-highlight-light-50",
  size: "xs",
  iconValue: "shopping-cart",
  type: "circle-icon",
};

export const BlackShoppingcartIcon = Template.bind({});
BlackShoppingcartIcon.args = {
  testID: testID,
  bgColor: "bg-highlight-dark-50",
  fgColor: "fg-highlight-light-50",
  size: "m",
  iconValue: "shopping-cart",
  type: "circle-icon",
};
export const WhiteShoppingcartIcon = Template.bind({});
WhiteShoppingcartIcon.args = {
  testID: testID,
  bgColor: "bg-highlight-light-50",
  fgColor: "fg-highlight-dark-50",
  size: "m",
  iconValue: "shopping-cart",
  type: "circle-icon",
};
export const SaveIcon = Template.bind({});
SaveIcon.args = {
  testID: testID,
  bgColor: "bg-highlight-dark-50",
  fgColor: "fg-highlight-light-50",
  size: "m",
  iconValue: "floppy-disk",
  type: "circle-icon",
};
export const SpotifyIcon = Template.bind({});
SpotifyIcon.args = {
  testID: testID,
  bgColor: "bg-highlight-dark-50",
  fgColor: "fg-highlight-light-50",
  size: "m",
  iconValue: ["fab", "spotify"],
  type: "circle-icon",
};

export const FooterIcon = Template.bind({});
FooterIcon.args = {
  testID: testID,
  bgColor: "none",
  fgColor: "fg-base-light-50",
  size: "m",
  iconValue: ["fab", "instagram"],
  type: "default-icon",
};

export const LargerArrowIcon = Template.bind({});
LargerArrowIcon.args = {
  testID: testID,
  bgColor: "none",
  fgColor: "fg-highlight-light-50",
  size: "l",
  iconValue: "arrow-right-long",
  type: "default-icon",
};
export const SmallerArrowIcon = Template.bind({});
SmallerArrowIcon.args = {
  testID: testID,
  bgColor: "none",
  fgColor: "fg-highlight",
  size: "m",
  iconValue: "arrow-right-long",
  type: "default-icon",
};

export const ItemCountIcon = Template.bind({});
ItemCountIcon.args = {
  testID: testID,
  bgColor: "bg-highlight",
  fgColor: "fg-highlight-light-50",
  size: "xs",
  type: "item-count",
  iconValue: "",
  textValue: 3,
};

export default IconMeta;
