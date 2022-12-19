import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/// TODO: Define props
const Pagination = (props) => {
  let pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(props.numberOfCards / props.cardsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div
      data-testid={props.testID}
      className={"Pagination main-text-bold-12 fg-base-light-50"}
    >
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              className={
                number === props.currentPage
                  ? "main-text-bold-16 fg-highlight-dark-50"
                  : ""
              }
            >
              <a
                onClick={() => {
                  props.setPage(number);
                }}
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  testID: PropTypes.string,
  numberOfCards: PropTypes.number,
  cardsPerPage: PropTypes.number,
};

export default Pagination;
