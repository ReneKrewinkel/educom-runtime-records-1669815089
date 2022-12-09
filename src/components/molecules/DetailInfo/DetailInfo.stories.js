import React from "react";
import DetailInfo from "./DetailInfo";

const DetailInfoMeta = {
  title: "molecules/DetailInfo",
  component: DetailInfo,
  argTypes: {
    testID: { table: { disable: true } },
    title: { name: "Title" },
    artist: { name: "Artist" },
    genre: { name: "Genre" },
    shortDescription: { name: "ShortDescription" },
    longDescription: { name: "LongDescription" },
  },
};

const testID = "DetailInfo-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <DetailInfo {...args} />;

export const DefaultDetailInfo = Template.bind({});
DefaultDetailInfo.args = {
  testID: testID,
  title: "Dickfehler Studio Treffen 1",
  artist: "Kombynat Robotron",
  genre: "instrumental, psychedelic rock, space rock, kosmische Musik",
  shortDescription:
    "This Psychedelic stonker from Drone Rock Records is a live, professionally recorded session from Kombynat Robotron. Designed to be played very loudly, 'Dickfehler Studio Treffen 1' is kosmiche music at its very finest, consisting of lengthy jams filled with sonic diversity and excellent displays of dynamics.",
  longDescription:
    "Surfing psychedelic, stoner rock vibes to the edges of outer space, this is a dependably freaky series of jams from an incredibly industrious band.",
};

export default DetailInfoMeta;
