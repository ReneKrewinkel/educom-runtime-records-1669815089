import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

/// TODO: Define props
const FooterIcon = (props) => {
  return (
    <div
      data-testid={props.testID}
      className={`FooterIcon fg-base-light-50 main-text-regular-20 `}
    >
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  );
};

FooterIcon.propTypes = {
  testID: PropTypes.string,
};

export default FooterIcon;
