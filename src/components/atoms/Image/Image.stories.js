import React from "react";
import Image from "./Image";

const ImageMeta = {
  title: "atoms/Image",
  component: Image,
  argTypes: {
    testID: { table: { disable: true } },
    type: { name: "Type" },
    file: { name: "File" },
    additionalClasses: { name: "AdditionalClasses" },
  },
};

const testID = "Image-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Image {...args} />;

export const DefaultImage = Template.bind({});
DefaultImage.args = {
  testID: testID,
  type: "rounded",
  file: "mythic-sunship-another-shape-of-psychedelic-music.jpg",
  additionalClasses: ["light-box-shadow"],
};

export default ImageMeta;
