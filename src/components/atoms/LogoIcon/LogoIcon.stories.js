import React from "react";
import LogoIcon from "./LogoIcon";

const LogoIconMeta = {
  title: "atoms/LogoIcon",
  component: LogoIcon,
  argTypes: {
    testID: { table: { disable: true } },
    size: { name: "Size" },
    type: { name: "Type" },
  },
};

const testID = "LogoIcon-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <LogoIcon {...args} />;

export const WhiteLogoIcon = Template.bind({});
WhiteLogoIcon.args = {
  testID: testID,
  size: "large",
  type: "logo-icon-white",
};

export const SmallBlackLogoIcon = Template.bind({});
SmallBlackLogoIcon.args = {
  testID: testID,
  size: "small",
  type: "logo-icon-black",
};
export const MediumBlackLogoIcon = Template.bind({});
MediumBlackLogoIcon.args = {
  testID: testID,
  size: "medium",
  type: "logo-icon-black",
};

export default LogoIconMeta;
