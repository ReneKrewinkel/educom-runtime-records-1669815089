import React from "react";
import Hero from "./Hero";
import StoryData from "../../config/StoryData";

const HeroMeta = {
  title: "organisms/Hero",
  component: Hero,
  argTypes: {
    testID: { table: { disable: true } },
    additionalClasses: { name: "AdditionalClasses" },
    data: { name: "Data" },
  },
};

const testID = "Hero-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Hero {...args} />;

export const DefaultHero = Template.bind({});
DefaultHero.args = {
  testID: testID,
  additionalClasses: ["bg-highlight-dark-50", "padding-m"],
  data: StoryData[0],
};

export default HeroMeta;
