import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/// TODO: Define props
const Album_artist = (props) => {
  return (
    <div
      data-testid={props.testID}
      className={`Album_artist fg-base-light-50 main-text-bold-16`}
    >
      {props.text}
    </div>
  );
};

Album_artist.propTypes = {
  testID: PropTypes.string,
  text: PropTypes.string,
};

export default Album_artist;
