import React from "react";
import Album_title from "./Album_title";

const Album_titleMeta = {
  title: "atoms/Album_title",
  component: Album_title,
  argTypes: {
    testID: { table: { disable: true } },
    size: { name: "Size" },
    type: { name: "Type" },
    text: { name: "Text" },
  },
};

const testID = "Album_title-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Album_title {...args} />;

export const SmallAlbum_title = Template.bind({});
SmallAlbum_title.args = {
  testID: testID,
  size: "small",
  type: "regular",
  text: "Book of Curses",
};
export const MediumAlbum_title = Template.bind({});
MediumAlbum_title.args = {
  testID: testID,
  size: "medium",
  type: "regular",
  text: "Book of Curses",
};
export const LargeAlbum_title = Template.bind({});
LargeAlbum_title.args = {
  testID: testID,
  size: "large",
  type: "regular",
  text: "Book of Curses",
};
export const HeroAlbum_title = Template.bind({});
HeroAlbum_title.args = {
  testID: testID,
  size: "large",
  type: "hero",
  text: "Book of Curses",
};

export default Album_titleMeta;
