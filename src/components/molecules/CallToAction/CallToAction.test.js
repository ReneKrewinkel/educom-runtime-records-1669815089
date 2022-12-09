import React from "react";
import { render, screen } from "@testing-library/react";

/// Preferably each story instead of actual object
///
import { DefaultCallToAction, ShortCallToAction } from "./CallToAction.stories";

const testID = "CallToAction-" + Math.floor(Math.random() * 90000) + 10000;

describe("CallToAction", () => {
  it("Can render CallToAction", () => {
    render(<DefaultCallToAction testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render CallToAction", () => {
    render(<ShortCallToAction testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
});
