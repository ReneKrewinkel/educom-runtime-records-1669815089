import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import HamburgerMenu from "../../atoms/HamburgerMenu/HamburgerMenu";
import LogoIcon from "../../atoms/LogoIcon";
import Icon from "../../atoms/Icon";

import { MenuContext } from "../../../contexts";
import { Container } from "react-bootstrap";
/// TODO: Define props
const PopoutMenu = (props) => {
  const classes = ["PopoutMenu", ...(props.additionalClasses || [])].join(" ");
  const { isActive, setIsActive } = useContext(MenuContext);
  return (
    <div
      data-testid={props.testID}
      className={classes}
      data-object-type={isActive ? "isActive" : ""}
    >
      <Container fluid>
        <div className="flex justify-content-space-between">
          <LogoIcon size="small" type="logo-icon-black" />
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
            <HamburgerMenu type="menu-open" />
          </div>
        </div>
        <ul>
          {props.menuItems.map((item, index) => {
            return (
              <li className="h1 flex align-items-center" key={index}>
                <Icon
                  additionalClasses={[
                    "fg-highlight-dark-50",
                    "padding-inline-xs",
                    "main-text-regular-34",
                  ]}
                  iconValue={["fa", "arrow-right"]}
                  type={"default-icon"}
                />
                <div className="nav-item">
                  <a className="fg-highlight-dark-50" href="#">
                    {item}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

PopoutMenu.propTypes = {
  testID: PropTypes.string,
  menuItems: PropTypes.array,
  additionalClasses: PropTypes.array,
};

export default PopoutMenu;
