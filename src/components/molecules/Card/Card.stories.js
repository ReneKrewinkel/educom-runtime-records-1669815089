import React from "react";
import Card from "./Card";

const CardMeta = {
  title: "molecules/Card",
  component: Card,
  argTypes: {
    testID: { table: { disable: true } },
    additionalClasses: { name: "AdditionalClasses" },
  },
};

const testID = "Card-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  testID: testID,
  additionalClasses: ["margin-m"],
};

export default CardMeta;
