import React from "react";
import { render, screen } from "@testing-library/react";
import StoryData from "../../config/StoryData";

/// Preferably each story instead of actual object
///
import { DefaultCardGrid } from "./CardGrid.stories";

const testID = "CardGrid-" + Math.floor(Math.random() * 90000) + 10000;

describe("CardGrid", () => {
  it("Can render CardGrid", () => {
    render(<DefaultCardGrid testID={testID} data={StoryData} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
});
