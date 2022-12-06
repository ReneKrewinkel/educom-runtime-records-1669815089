import React from "react";
import HamburgerMenu from "./HamburgerMenu";

const HamburgerMenuMeta = {
  title: "atoms/HamburgerMenu",
  component: HamburgerMenu,
  argTypes: {
    testID: { table: { disable: true } },
    type: { name: "Type" },
  },
};

const testID = "HamburgerMenu-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <HamburgerMenu {...args} />;

export const ClosedMenu = Template.bind({});
ClosedMenu.args = {
  testID: testID,
  type: "menu-closed",
};
export const OpenMenu = Template.bind({});
OpenMenu.args = {
  testID: testID,
  type: "menu-open",
};

export default HamburgerMenuMeta;
