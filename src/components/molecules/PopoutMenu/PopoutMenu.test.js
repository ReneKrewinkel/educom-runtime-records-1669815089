import React from "react";
import { render, screen } from "@testing-library/react";

/// Preferably each story instead of actual object
///
import { DefaultPopoutMenu } from "./PopoutMenu.stories";

const testID = "PopoutMenu-" + Math.floor(Math.random() * 90000) + 10000;

describe("PopoutMenu", () => {
  it("Can render PopoutMenu", () => {
    render(
      <DefaultPopoutMenu testID={testID} menuItems={["item1", "item2"]} />
    );
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
});
