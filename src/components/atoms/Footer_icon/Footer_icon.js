import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

/// TODO: Define props
const Footer_icon = (props) => {
  return (
    <div
      data-testid={props.testID}
      className={`Footer_icon fg-base-light-50 main-text-regular-20 `}
    >
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  );
};

Footer_icon.propTypes = {
  testID: PropTypes.string,
};

export default Footer_icon;
