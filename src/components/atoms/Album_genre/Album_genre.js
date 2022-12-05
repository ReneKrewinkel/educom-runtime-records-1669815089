import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/// TODO: Define props
const Album_genre = (props) => {
  return (
    <div
      data-testid={props.testID}
      className={`Album_genre fg-highlight main-text-bold-12 `}
    >
      {props.text}
    </div>
  );
};

Album_genre.propTypes = {
  testID: PropTypes.string,
  text: PropTypes.string,
};

export default Album_genre;
