import React from "react";
import DetailSection from "./DetailSection";
import StoryData from "../../config/StoryData";
const DetailSectionMeta = {
  title: "organisms/DetailSection",
  component: DetailSection,
  argTypes: {
    testID: { table: { disable: true } },
  },
  data: { name: "Data" },
};

const testID = "DetailSection-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <DetailSection {...args} />;

export const DefaultDetailSection = Template.bind({});
DefaultDetailSection.args = {
  testID: testID,
  data: StoryData[0],
};

export default DetailSectionMeta;
