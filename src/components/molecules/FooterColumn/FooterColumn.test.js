import React from "react";
import { render, screen } from "@testing-library/react";

/// Preferably each story instead of actual object
///
import {
  DefaultFooterColumn,
  LogoFooterColumn,
  SocialsFooterColumn,
} from "./FooterColumn.stories";

const testID = "FooterColumn-" + Math.floor(Math.random() * 90000) + 10000;

describe("FooterColumn", () => {
  it("Can render FooterColumn", () => {
    render(<DefaultFooterColumn testID={testID} content={[""]} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render FooterColumn", () => {
    render(<SocialsFooterColumn testID={testID} content={[""]} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render FooterColumn", () => {
    render(<LogoFooterColumn testID={testID} content={[""]} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
});
