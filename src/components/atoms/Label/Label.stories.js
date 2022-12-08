import React from "react";
import Label from "./Label";

const LabelMeta = {
  title: "atoms/Label",
  component: Label,
  argTypes: {
    testID: { table: { disable: true } },
    additionalClasses: { name: "Utility Classes" },
    text: { name: "Text" },
    exceptionType: { name: "ExceptionType" },
  },
};

const Template = (args) => <Label {...args} />;

export const SmallOrangeLabel = Template.bind({});
SmallOrangeLabel.args = {
  text: "indie, math rock, noise rock",
  additionalClasses: ["fg-highlight", "main-text-bold-12"],
};

export const GreyLabel = Template.bind({});
GreyLabel.args = {
  text: "Mythic Sunship",
  additionalClasses: ["fg-base-light-50", "h5"],
};

export const FooterItemLabel = Template.bind({});
FooterItemLabel.args = {
  text: "info@runtime-records.com",
  additionalClasses: ["fg-base-light-50", "main-text-bold-12"],
};
export const HeroHeaderLabel = Template.bind({});
HeroHeaderLabel.args = {
  text: "Book of Curse",
  additionalClasses: ["fg-highlight-light-50", "h2"],
};
export const FooterHeaderLabel = Template.bind({});
FooterHeaderLabel.args = {
  text: "Info",
  additionalClasses: ["fg-highlight-light-50", "h3"],
};
export const H4Label = Template.bind({});
H4Label.args = {
  text: "Spiderland",
  additionalClasses: ["fg-highlight-dark-50", "h4"],
};
export const H1Label = Template.bind({});
H1Label.args = {
  text: "shopping cart",
  additionalClasses: ["fg-highlight-dark-50", "h1"],
};
export const H3Label = Template.bind({});
H3Label.args = {
  text: "Another Shape of Psychedelic Music",
  additionalClasses: ["fg-highlight-dark-50", "h3"],
};
export const H2Label = Template.bind({});
H2Label.args = {
  text: "total order",
  additionalClasses: ["fg-highlight-dark-50", "h2"],
};

export default LabelMeta;
