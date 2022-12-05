import React from "react";
import Footer_icon from "./Footer_icon";

const Footer_iconMeta = {
  title: "atoms/Footer_icon",
  component: Footer_icon,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "Footer_icon-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Footer_icon {...args} />;

export const DefaultFooter_icon = Template.bind({});
DefaultFooter_icon.args = {
  testID: testID,
};

export default Footer_iconMeta;
