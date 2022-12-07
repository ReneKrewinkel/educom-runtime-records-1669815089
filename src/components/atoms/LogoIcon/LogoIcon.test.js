import React from "react";
import { render, screen } from "@testing-library/react";

/// Preferably each story instead of actual object
///
import {
  WhiteLogoIcon,
  SmallBlackLogoIcon,
  MediumBlackLogoIcon,
} from "./LogoIcon.stories";

const testID = "LogoIcon-" + Math.floor(Math.random() * 90000) + 10000;

describe("LogoIcon", () => {
  it("Can render LogoIcon", () => {
    render(<WhiteLogoIcon testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render LogoIcon", () => {
    render(<SmallBlackLogoIcon testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render LogoIcon", () => {
    render(<MediumBlackLogoIcon testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
});
