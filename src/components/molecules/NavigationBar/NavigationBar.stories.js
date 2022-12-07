import React from "react";
import NavigationBar from "./NavigationBar";

const NavigationBarMeta = {
  title: "molecules/NavigationBar",
  component: NavigationBar,
  argTypes: {
    testID: { table: { disable: true } },
    additionalClasses: "AdditionalClasses",
  },
};

const testID = "NavigationBar-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <NavigationBar {...args} />;

export const DefaultNavigationBar = Template.bind({});
DefaultNavigationBar.args = {
  testID: testID,
  additionalClasses: [
    "bg-highlight-light-50",
    "padding-inline-m",
    "padding-block-xs",
    "flex",
    "justify-content-space-between",
  ],
};

export default NavigationBarMeta;
