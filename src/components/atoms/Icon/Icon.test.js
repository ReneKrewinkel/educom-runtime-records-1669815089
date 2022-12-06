import React from "react";
import { render, screen } from "@testing-library/react";

/// Preferably each story instead of actual object
///
import { OrangeShoppingcartIcon } from "./Icon.stories";

const testID = "Icon-" + Math.floor(Math.random() * 90000) + 10000;

describe("Icon", () => {
  it("Can render Icon", () => {
    render(<OrangeShoppingcartIcon testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
});
