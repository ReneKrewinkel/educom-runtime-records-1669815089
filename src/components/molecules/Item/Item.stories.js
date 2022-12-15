import React from "react";
import Item from "./Item";

const ItemMeta = {
  title: "molecules/Item",
  component: Item,
  argTypes: {
    testID: { table: { disable: true } },
    additionalClasses: { name: "AdditionalClasses" },
  },
};

const testID = "Item-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Item {...args} />;

export const DefaultItem = Template.bind({});
DefaultItem.args = {
  testID: testID,
  additionalClasses: [
    "flex",
    "align-items-center",
    "justify-content-space-between",
    "padding-block-s",
  ],
};

export default ItemMeta;
