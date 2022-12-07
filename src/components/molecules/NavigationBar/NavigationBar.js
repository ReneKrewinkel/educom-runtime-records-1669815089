import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LogoIcon from "../../atoms/LogoIcon";
import Logo from "../../atoms/Logo";
import Icon from "../../atoms/Icon";
import HamburgerMenu from "../../atoms/HamburgerMenu/HamburgerMenu";

/// TODO: Define props
const NavigationBar = (props) => {
  const classes = ["NavigationBar", ...(props.additionalClasses || [])].join(
    " "
  );

  return (
    <div data-testid={props.testID} className={classes}>
      <div className=" flex align-items-center gap-s ">
        <LogoIcon type="logo-icon-black" size="small" />
        <Logo size="medium" />
      </div>
      <div className=" flex align-items-center gap-m">
        <div data-object-type="shoppingcart-icon">
          <Icon
            additionalClasses={[
              "bg-highlight-dark-50",
              "fg-highlight-light-50",
              "padding-xs",
              "main-text-regular-22",
            ]}
            iconValue={["fa", "shopping-cart"]}
            type="circle-icon"
          />
          <Icon
            additionalClasses={[
              "bg-highlight",
              "fg-highlight-light-50",
              "padding-xs",
              "main-text-bold-12",
            ]}
            type="item-count"
            textValue={3}
          />
        </div>

        <HamburgerMenu type="menu-closed" />
      </div>
    </div>
  );
};

NavigationBar.propTypes = {
  testID: PropTypes.string,
  additionalClasses: PropTypes.array,
};

export default NavigationBar;
