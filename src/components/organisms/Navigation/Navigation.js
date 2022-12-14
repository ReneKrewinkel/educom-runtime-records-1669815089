import { useState } from "react";
import PropTypes from "prop-types";
import NavigationBar from "../../molecules/NavigationBar/NavigationBar";
import PopoutMenu from "../../molecules/PopoutMenu/PopoutMenu";
import { MenuContext } from "../../../contexts";

/// TODO: Define props
const Navigation = (props) => {
  const [isActive, setIsActive] = useState(false);
  const value = { isActive, setIsActive };
  return (
    <div data-testid={props.testID} className={"Navigation"}>
      <MenuContext.Provider value={value}>
        <NavigationBar
          additionalClasses={[
            "bg-highlight-light-50",
            "padding-inline-m",
            "padding-block-xs",
            "flex",
            "justify-content-space-between",
          ]}
        />
        <PopoutMenu
          menuItems={["shop", "account", "info", "contact"]}
          additionalClasses={[
            "bg-highlight-light-50",
            "padding-inline-m",
            "padding-block-xs",
          ]}
        />
      </MenuContext.Provider>
    </div>
  );
};

Navigation.propTypes = {
  testID: PropTypes.string,
};

export default Navigation;
