import React from "react";
import Button from "./Button";

const ButtonMeta = {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    testID: { table: { disable: true } },
    additionalClasses: { name: "AdditionalClasses" },
    text: { name: "Text" },
  },
};

const testID = "Button-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  testID: testID,
  additionalClasses: [
    "bg-highlight",
    "fg-highlight-light-50",
    "main-text-bold-12",
  ],
  text: "read more",
};

export default ButtonMeta;
