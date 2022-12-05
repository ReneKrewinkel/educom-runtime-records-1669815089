import React from "react";
import Album_genre from "./Album_genre";

const Album_genreMeta = {
  title: "atoms/Album_genre",
  component: Album_genre,
  argTypes: {
    testID: { table: { disable: true } },
    text: { name: "Text" },
  },
};

const testID = "Album_genre-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Album_genre {...args} />;

export const DefaultAlbum_genre = Template.bind({});
DefaultAlbum_genre.args = {
  testID: testID,
  text: "indie, math rock, noise rock",
};

export default Album_genreMeta;
