import React from "react";
import CardGrid from "./CardGrid";
import StoryData from "../../config/StoryData";

const CardGridMeta = {
  title: "organisms/CardGrid",
  component: CardGrid,
  argTypes: {
    testID: { table: { disable: true } },
    data: { name: "Data" },
    additionalClasses: { name: "AdditionalClasses" },
  },
};

const testID = "CardGrid-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <CardGrid {...args} />;

export const DefaultCardGrid = Template.bind({});
DefaultCardGrid.args = {
  testID: testID,
  additionalClasses: ["margin-m"],
  data: StoryData,
};

export default CardGridMeta;
