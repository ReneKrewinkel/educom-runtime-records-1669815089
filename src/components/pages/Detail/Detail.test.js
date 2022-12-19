import React from "react";
import { render, screen } from "@testing-library/react";
import StoryData from "../../config/StoryData";

/// Preferably each story instead of actual object
///
import { DefaultDetail } from "./Detail.stories";

const testID = "Detail-" + Math.floor(Math.random() * 90000) + 10000;

describe("Detail", () => {
  it("Can render Detail", () => {
    render(<DefaultDetail testID={testID} data={StoryData} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
});
