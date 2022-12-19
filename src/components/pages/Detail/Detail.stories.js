import React from "react";
import Detail from "./Detail";
import StoryData from "../../config/StoryData";

const DetailMeta = {
  title: "pages/Detail",
  component: Detail,
  argTypes: {
    testID: { table: { disable: true } },
    data: { name: "Data" },
  },
};

const testID = "Detail-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Detail {...args} />;

export const DefaultDetail = Template.bind({});
DefaultDetail.args = {
  testID: testID,
  data: StoryData,
};

export default DetailMeta;
