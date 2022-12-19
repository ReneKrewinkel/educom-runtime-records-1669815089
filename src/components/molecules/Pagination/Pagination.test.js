import React from "react";
import { render, screen } from "@testing-library/react";
import { DefaultPagination } from "./Pagination.stories";

const testID = "Pagination-" + Math.floor(Math.random() * 90000) + 10000;

describe("Pagination", () => {
  it("Can render Pagination", () => {
    render(
      <DefaultPagination testID={testID} numberOfCards={20} cardsPerPage={8} />
    );
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
});
