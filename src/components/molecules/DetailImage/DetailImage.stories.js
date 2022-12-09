import React from "react";
import DetailImage from "./DetailImage";

const DetailImageMeta = {
  title: "molecules/DetailImage",
  component: DetailImage,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "DetailImage-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <DetailImage {...args} />;

export const DefaultDetailImage = Template.bind({});
DefaultDetailImage.args = {
  testID: testID,
  additionalClasses: ["margin-s"],
  exceptionType: "",
};

export const DisplayDetailImage = Template.bind({});
DisplayDetailImage.args = {
  testID: testID,
  additionalClasses: ["margin-s"],
  exceptionType: "album-display",
};

export default DetailImageMeta;
