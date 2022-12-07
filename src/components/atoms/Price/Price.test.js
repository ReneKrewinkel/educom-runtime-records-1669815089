import React from "react";
import { render, screen } from "@testing-library/react";

/// Preferably each story instead of actual object
///
import { DefaultPrice, LargerPrice } from "./Price.stories";

const testID = "Price-" + Math.floor(Math.random() * 90000) + 10000;

describe("Price", () => {
  it("Can render Price", () => {
    render(<DefaultPrice testID={testID} amount={22} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
  it("Can render Price", () => {
    render(<LargerPrice testID={testID} amount={22.5} />);
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
});
