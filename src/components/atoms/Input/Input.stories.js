import React from "react";
import { Placeholder } from "react-bootstrap";
import Input from "./Input";

const InputMeta = {
  title: "atoms/Input",
  component: Input,
  argTypes: {
    testID: { table: { disable: true } },
    additionalClasses: { name: "AdditionalClasses" },
    placeholder: { name: "Placeholder" },
  },
};

const testID = "Input-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  testID: testID,
  additionalClasses: ["light-box-shadow", "main-text-bold-28"],
  placeholder: "search",
};

export default InputMeta;
