import React from "react";
import { render, screen } from "@testing-library/react";

/// Preferably each story instead of actual object
///
import {
  SmallOrangeLabel,
  GreyLabel,
  FooterItemLabel,
  HeroHeaderLabel,
  FooterHeaderLabel,
  H4Label,
  H1Label,
  H3Label,
  H2Label,
} from "./Label.stories";

const testID = "Label-" + Math.floor(Math.random() * 90000) + 10000;

describe("Label", () => {
  it("Can render Label", () => {
    render(<SmallOrangeLabel testID={testID} text={"Test Run"} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Label", () => {
    render(<GreyLabel testID={testID} text={"Test Run"} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Label", () => {
    render(<FooterItemLabel testID={testID} text={"Test Run"} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Label", () => {
    render(<HeroHeaderLabel testID={testID} text={"Test Run"} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Label", () => {
    render(<FooterHeaderLabel testID={testID} text={"Test Run"} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Label", () => {
    render(<H4Label testID={testID} text={"Test Run"} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Label", () => {
    render(<H1Label testID={testID} text={"Test Run"} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Label", () => {
    render(<H3Label testID={testID} text={"Test Run"} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Label", () => {
    render(<H2Label testID={testID} text={"Test Run"} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
});
