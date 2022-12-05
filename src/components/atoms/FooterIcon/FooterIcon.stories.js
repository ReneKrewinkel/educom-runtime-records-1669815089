import React from "react";
import FooterIcon from "./FooterIcon";

const FooterIconMeta = {
  title: "atoms/FooterIcon",
  component: FooterIcon,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "FooterIcon-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <FooterIcon {...args} />;

export const DefaultFooterIcon = Template.bind({});
DefaultFooterIcon.args = {
  testID: testID,
};

export default FooterIconMeta;
