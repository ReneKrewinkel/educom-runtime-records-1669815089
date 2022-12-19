import React from "react";
import Home from "./Home";
import StoryData from "../../config/StoryData";

const HomeMeta = {
  title: "pages/Home",
  component: Home,
  argTypes: {
    testID: { table: { disable: true } },
    data: { name: "Data" },
    cardsPerPage: { name: "CardsPerPage" },
  },
};

const testID = "Home-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Home {...args} />;

export const DefaultHome = Template.bind({});
DefaultHome.args = {
  testID: testID,
  data: StoryData,
  cardsPerPage: 8,
};

export default HomeMeta;
