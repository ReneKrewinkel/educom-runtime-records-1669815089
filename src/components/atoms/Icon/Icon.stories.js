import React from "react";
import Icon from "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconMeta = {
  title: "atoms/Icon",
  component: Icon,
  argTypes: {
    testID: { table: { disable: true } },
    iconValue: { name: "IconValue" },
    type: { name: "Type" },
    textValue: { name: "TextValue" },
    additionalClasses: { name: "AdditionalClasses" },
  },
};

const testID = "Icon-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Icon {...args} />;

export const OrangeShoppingcartIcon = Template.bind({});
OrangeShoppingcartIcon.args = {
  testID: testID,
  additionalClasses: [
    "bg-highlight",
    "fg-highlight-light-50",
    "padding-xs",
    "main-text-regular-16",
  ],
  iconValue: "shopping-cart",
  type: "circle-icon",
};

export const BlackShoppingcartIcon = Template.bind({});
BlackShoppingcartIcon.args = {
  testID: testID,
  additionalClasses: [
    "bg-highlight-dark-50",
    "fg-highlight-light-50",
    "padding-xs",
    "main-text-regular-24",
  ],
  iconValue: "shopping-cart",
  type: "circle-icon",
};
export const WhiteShoppingcartIcon = Template.bind({});
WhiteShoppingcartIcon.args = {
  testID: testID,
  additionalClasses: [
    "bg-highlight-light-50",
    "fg-highlight-dark-50",
    "padding-xs",
    "main-text-regular-24",
  ],
  iconValue: "shopping-cart",
  type: "circle-icon",
};
export const SaveIcon = Template.bind({});
SaveIcon.args = {
  testID: testID,
  additionalClasses: [
    "bg-highlight-dark-50",
    "fg-highlight-light-50",
    "padding-xs",
    "main-text-regular-24",
  ],
  iconValue: "floppy-disk",
  type: "circle-icon",
};
export const SpotifyIcon = Template.bind({});
SpotifyIcon.args = {
  testID: testID,
  additionalClasses: [
    "bg-highlight-dark-50",
    "fg-highlight-light-50",
    "padding-xs",
    "main-text-regular-24",
  ],
  iconValue: ["fab", "spotify"],
  type: "circle-icon",
};

export const FooterIcon = Template.bind({});
FooterIcon.args = {
  testID: testID,
  additionalClasses: ["fg-base-light-50", "padding-xs", "main-text-regular-24"],
  iconValue: ["fab", "instagram"],
  type: "default-icon",
};

export const LargerArrowIcon = Template.bind({});
LargerArrowIcon.args = {
  testID: testID,
  additionalClasses: [
    "fg-highlight-light-50",
    "padding-xs",
    "main-text-regular-34",
  ],
  iconValue: "arrow-right-long",
  type: "default-icon",
};
export const SmallerArrowIcon = Template.bind({});
SmallerArrowIcon.args = {
  testID: testID,
  additionalClasses: ["fg-highlight", "padding-xs", "main-text-regular-24"],
  iconValue: "arrow-right-long",
  type: "default-icon",
};

export const ItemCountIcon = Template.bind({});
ItemCountIcon.args = {
  testID: testID,
  additionalClasses: [
    "bg-highlight",
    "fg-highlight-light-50",
    "padding-xs",
    "main-text-regular-16",
  ],
  type: "item-count",
  iconValue: "",
  textValue: 3,
};

export const TrashIcon = Template.bind({});
TrashIcon.args = {
  testID: testID,
  additionalClasses: [
    "fg-highlight-dark-50",
    "padding-xs",
    "main-text-regular-16",
  ],
  type: "default-icon",
  iconValue: "trash",
};

export default IconMeta;
