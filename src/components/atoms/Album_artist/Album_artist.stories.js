import React from "react";
import Album_artist from "./Album_artist";

const Album_artistMeta = {
  title: "atoms/Album_artist",
  component: Album_artist,
  argTypes: {
    testID: { table: { disable: true } },
    text: { name: "Text" },
  },
};

const testID = "Album_artist-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Album_artist {...args} />;

export const DefaultAlbum_artist = Template.bind({});
DefaultAlbum_artist.args = {
  testID: testID,
  text: "Mythic Sunship",
};

export default Album_artistMeta;
