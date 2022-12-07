import React from "react";
import { render, screen } from "@testing-library/react";

/// Preferably each story instead of actual object
///
import {
  OrangeShoppingcartIcon,
  BlackShoppingcartIcon,
  WhiteShoppingcartIcon,
  SaveIcon,
  SpotifyIcon,
  FooterIcon,
  LargerArrowIcon,
  SmallerArrowIcon,
  ItemCountIcon,
  TrashIcon,
} from "./Icon.stories";

const testID = "Icon-" + Math.floor(Math.random() * 90000) + 10000;

describe("Icon", () => {
  it("Can render Icon", () => {
    render(<OrangeShoppingcartIcon testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });

  it("Can render Icon", () => {
    render(<WhiteShoppingcartIcon testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Icon", () => {
    render(<BlackShoppingcartIcon testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Icon", () => {
    render(<SaveIcon testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Icon", () => {
    render(<SpotifyIcon testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Icon", () => {
    render(<FooterIcon testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Icon", () => {
    render(<LargerArrowIcon testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Icon", () => {
    render(<SmallerArrowIcon testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Icon", () => {
    render(<ItemCountIcon testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Icon", () => {
    render(<TrashIcon testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
});
