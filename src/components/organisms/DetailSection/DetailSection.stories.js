import React from "react";
import DetailSection from "./DetailSection";

const DetailSectionMeta = {
  title: "organisms/DetailSection",
  component: DetailSection,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "DetailSection-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <DetailSection {...args} />;

export const DefaultDetailSection = Template.bind({});
DefaultDetailSection.args = {
  testID: testID,
};

export default DetailSectionMeta;
