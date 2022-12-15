import React from "react";
import Pagination from "./Pagination";
import StoryData from "../../config/StoryData";

const PaginationMeta = {
  title: "molecules/Pagination",
  component: Pagination,
  argTypes: {
    testID: { table: { disable: true } },
    data: { name: "Data" },
    cardsPerPage: { name: "CardsPerPage" },
  },
};

const testID = "Pagination-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Pagination {...args} />;

export const DefaultPagination = Template.bind({});
DefaultPagination.args = {
  testID: testID,
  data: StoryData,
  cardsPerPage: 8,
};

export default PaginationMeta;
