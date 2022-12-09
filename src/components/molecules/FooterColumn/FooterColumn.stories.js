import React from "react";
import FooterColumn from "./FooterColumn";
import Logo from "../../atoms/Logo/Logo";
import LogoIcon from "../../atoms/LogoIcon/LogoIcon";

const FooterColumnMeta = {
  title: "molecules/FooterColumn",
  component: FooterColumn,
  argTypes: {
    testID: { table: { disable: true } },
    heading: { name: "Heading" },
    content: { name: "Content" },
    type: { name: "Type" },
    additionalClasses: { name: "AdditionalClasses" },
  },
};

const testID = "FooterColumn-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <FooterColumn {...args} />;

export const DefaultFooterColumn = Template.bind({});
DefaultFooterColumn.args = {
  testID: testID,
  heading: "info",
  content: [
    { icon: [""], text: "About us" },
    { icon: [""], text: "Privacy Policy" },
    { icon: [""], text: "Shipping" },
  ],
  type: "text",
};

export const SocialsFooterColumn = Template.bind({});
SocialsFooterColumn.args = {
  testID: testID,
  heading: <Logo size="small" exceptionType={"logo-white"} />,
  content: [
    { icon: ["fa", "envelope"], text: "info@runtime-records.com" },
    { icon: ["fa", "record-vinyl"], text: "discogs.com/runtime-records" },
    { icon: ["fab", "square-facebook"], text: "facebook.com/runtime-records" },
    { icon: ["fab", "twitter"], text: "@RuntimeRecords" },
    { icon: ["fab", "instagram"], text: "@RuntimeRecords" },
  ],
  type: "text",
};

export const LogoFooterColumn = Template.bind({});
LogoFooterColumn.args = {
  testID: testID,
  content: [
    <Logo size={"extra-large"} exceptionType={"logo2"} />,
    <LogoIcon size={"large"} type={"logo-icon-white"} />,
  ],
  type: "images",
  additionalClasses: ["flex", " align-items-center"],
};

export default FooterColumnMeta;
