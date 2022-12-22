import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input/Input";
import LogoIcon from "../../atoms/LogoIcon/LogoIcon";
import Icon from "../../atoms/Icon";

/// TODO: Define props
const SearchBar = (props) => {
  const classes = ["SearchBar", ...(props.additionalClasses || [])].join(" ");

  return (
    <div
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={classes}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          additionalClasses={["light-box-shadow", "main-text-bold-50"]}
          placeholder={"search"}
        />
        <button type="submit">
          <LogoIcon
            size={"medium"}
            type={"logo-icon-black"}
            exceptionType={"input-icon"}
          />
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  testID: PropTypes.string,
  additionalClasses: PropTypes.array,
};

export default SearchBar;
