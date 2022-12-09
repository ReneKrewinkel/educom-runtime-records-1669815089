import React from "react";
import HeroTextContent from "./HeroTextContent";

const HeroTextContentMeta = {
  title: "molecules/HeroTextContent",
  component: HeroTextContent,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "HeroTextContent-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <HeroTextContent {...args} />;

export const DefaultHeroTextContent = Template.bind({});
DefaultHeroTextContent.args = {
  testID: testID,
};

export default HeroTextContentMeta;
