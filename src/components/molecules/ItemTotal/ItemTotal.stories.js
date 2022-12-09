import React from "react";
import ItemTotal from "./ItemTotal";

const ItemTotalMeta = {
  title: "molecules/ItemTotal",
  component: ItemTotal,
  argTypes: {
    testID: { table: { disable: true } },
    additionalClasses: { name: "AdditionalClasses" },
  },
};

const testID = "ItemTotal-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <ItemTotal {...args} />;

export const DefaultItemTotal = Template.bind({});
DefaultItemTotal.args = {
  testID: testID,
  additionalClasses: [
    "flex",
    "align-items-center",
    "justify-content-space-between",
  ],
};

export default ItemTotalMeta;
