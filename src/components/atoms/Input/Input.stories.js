import React from "react";
import { Placeholder } from "react-bootstrap";
import Input from "./Input";

const InputMeta = {
  title: "atoms/Input",
  component: Input,
  argTypes: {
    testID: { table: { disable: true } },
    size: { name: "Size" },
    type: { name: "Type" },
    placeholder: { name: "Placeholder" },
  },
};

const testID = "Input-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  testID: testID,
  size: "large",
  type: "regular",
  placeholder: "search",
};

export default InputMeta;
