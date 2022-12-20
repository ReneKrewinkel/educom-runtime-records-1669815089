import React from "react";
import HeroTextContent from "./HeroTextContent";
import StoryData from "../../config/StoryData";
const HeroTextContentMeta = {
  title: "molecules/HeroTextContent",
  component: HeroTextContent,
  argTypes: {
    testID: { table: { disable: true } },
  },
  data: { name: "Data" },
};

const testID = "HeroTextContent-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <HeroTextContent {...args} />;

export const DefaultHeroTextContent = Template.bind({});
DefaultHeroTextContent.args = {
  testID: testID,
  data: StoryData[0],
};

export default HeroTextContentMeta;
