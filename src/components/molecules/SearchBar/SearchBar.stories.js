import React from "react";
import SearchBar from "./SearchBar";

const SearchBarMeta = {
  title: "molecules/SearchBar",
  component: SearchBar,
  argTypes: {
    testID: { table: { disable: true } },
    additionalClasses: { name: "AdditionalClasses" },
  },
};

const testID = "SearchBar-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <SearchBar {...args} />;

export const DefaultSearchBar = Template.bind({});
DefaultSearchBar.args = {
  testID: testID,
  additionalClasses: [],
};

export default SearchBarMeta;
