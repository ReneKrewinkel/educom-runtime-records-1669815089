import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { MenuContext } from "../../../contexts";

const HamburgerMenu = (props) => {
  const { isActive, setIsActive } = useContext(MenuContext);

  return (
    <div
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={"HamburgerMenu"}
      onClick={function () {
        props.type === "menu-open" ? setIsActive(false) : setIsActive(true);
      }}
    >
      <div className="bar1 bg-highlight-dark-50"></div>
      <div className="bar2 bg-highlight-dark-50"></div>
      <div className="bar3 bg-highlight-dark-50"></div>
    </div>
  );
};

const exceptionClasses = ["menu-open", "menu-closed"];

HamburgerMenu.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
};

export default HamburgerMenu;
