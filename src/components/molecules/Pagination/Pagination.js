import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/// TODO: Define props
const Pagination = (props) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.data.length / props.cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  return (
    <div
      data-testid={props.testID}
      className={"Pagination main-text-bold-12 fg-base-light-50"}
    >
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a href="#">{number}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  testID: PropTypes.string,
  data: PropTypes.array,
  cardsPerPage: PropTypes.number,
};

export default Pagination;
