import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import logoIconBlack from "../../../resources/images/disc-payoff.svg";
import logoIconWhite from "../../../resources/images/disc-payoff-white.svg";

/// TODO: Define props
const LogoIcon = (props) => {
  const logoIcon =
    props.type === "logo-icon-white" ? logoIconWhite : logoIconBlack;

  return (
    <div
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={`LogoIcon ${props.size}`}
    >
      <img src={logoIcon} />
    </div>
  );
};

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!
const sizes = ["small", "medium", "large"];

/// TODO: Adjust and extend
const exceptionClasses = ["logo-icon-white", "logo-icon-black"];

LogoIcon.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
  size: PropTypes.oneOf(sizes),
};

export default LogoIcon;
