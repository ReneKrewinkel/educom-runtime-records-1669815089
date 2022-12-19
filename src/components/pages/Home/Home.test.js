import React from "react";
import { render, screen } from "@testing-library/react";
import StoryData from "../../config/StoryData";

/// Preferably each story instead of actual object
///
import { DefaultHome } from "./Home.stories";

const testID = "Home-" + Math.floor(Math.random() * 90000) + 10000;

describe("Home", () => {
  it("Can render Home", () => {
    render(<DefaultHome testID={testID} data={StoryData} cardsPerPage={8} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
});
