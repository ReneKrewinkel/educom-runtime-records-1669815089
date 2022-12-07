import React from "react";
import { render, screen } from "@testing-library/react";

/// Preferably each story instead of actual object
///
import {
  DefaultLogo,
  SmallLogo,
  MediumLogo,
  LargeLogo,
  SecondLogo,
} from "./Logo.stories";

const testID = "Logo-" + Math.floor(Math.random() * 90000) + 10000;

describe("Logo", () => {
  it("Can render default Logo", () => {
    render(<DefaultLogo testID={`${testID}-small`} />);
    let smallCreated = screen.getByTestId(`${testID}-small`);
    expect(smallCreated).not.toBeNull();
  });
  it("Can render Small Logo", () => {
    render(<SmallLogo testID={`${testID}-small`} />);
    let smallCreated = screen.getByTestId(`${testID}-small`);
    expect(smallCreated).not.toBeNull();
  });

  it("Can render Medium Logo", () => {
    render(<MediumLogo testID={`${testID}-medium`} />);
    let mediumCreated = screen.getByTestId(`${testID}-medium`);
    expect(mediumCreated).not.toBeNull();
  });

  it("Can render Large Logo", () => {
    render(<LargeLogo testID={`${testID}-large`} />);
    let largeCreated = screen.getByTestId(`${testID}-large`);
    expect(largeCreated).not.toBeNull();
  });
  it("Can render second Logo", () => {
    render(<SecondLogo testID={`${testID}-large`} />);
    let largeCreated = screen.getByTestId(`${testID}-large`);
    expect(largeCreated).not.toBeNull();
  });
});
