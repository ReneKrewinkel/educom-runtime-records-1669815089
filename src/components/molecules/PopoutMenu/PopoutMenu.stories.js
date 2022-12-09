import React from "react";
import PopoutMenu from "./PopoutMenu";

const PopoutMenuMeta = {
  title: "molecules/PopoutMenu",
  component: PopoutMenu,
  argTypes: {
    testID: { table: { disable: true } },
    menuItems: { name: "MenuItems" },
    additionalClasses: { name: "AdditionalClasses" },
  },
};

const testID = "PopoutMenu-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <PopoutMenu {...args} />;

export const DefaultPopoutMenu = Template.bind({});
DefaultPopoutMenu.args = {
  testID: testID,
  menuItems: ["shop", "account", "info", "contact"],
  additionalClasses: [
    "bg-highlight-light-50",
    "padding-inline-m",
    "padding-block-xs",
  ],
};

export default PopoutMenuMeta;
