import React from "react";
import { render, screen } from "@testing-library/react";

/// Preferably each story instead of actual object
///
import { DefaultCheckoutCount } from "./CheckoutCount.stories";

const testID = "CheckoutCount-" + Math.floor(Math.random() * 90000) + 10000;

describe("CheckoutCount", () => {
  it("Can render CheckoutCount", () => {
    render(<DefaultCheckoutCount testID={testID} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
});
