import React from "react";
import { render, screen } from "@testing-library/react";
import StoryData from "../../config/StoryData";
/// Preferably each story instead of actual object
///
import { DefaultPagination } from "./Pagination.stories";

const testID = "Pagination-" + Math.floor(Math.random() * 90000) + 10000;

describe("Pagination", () => {
  it("Can render Pagination", () => {
    render(
      <DefaultPagination testID={testID} data={StoryData} cardsPerPage={8} />
    );
    let defaultCreated = screen.getByTestId(testID);
    expect(defaultCreated).not.toBeNull();
  });
});
