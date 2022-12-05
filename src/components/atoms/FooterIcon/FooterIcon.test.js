import React from "react";
import { render, screen } from "@testing-library/react";

/// Preferably each story instead of actual object
///
import { DefaultFooterIcon } from "./FooterIcon.stories";

const testID = "FooterIcon-" + Math.floor(Math.random() * 90000) + 10000;

describe("FooterIcon", () => {
  it("Can render FooterIcon", () => {
    render(<DefaultFooterIcon testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
});
