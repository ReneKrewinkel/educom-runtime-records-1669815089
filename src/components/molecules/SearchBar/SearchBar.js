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
      <form>
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
      <div>
        <Icon
          additionalClasses={[
            "bg-highlight-dark-50",
            "fg-highlight-light-50",
            "padding-xs",
            "main-text-regular-24",
            "margin-inline-xs",
          ]}
          iconValue={["fab", "spotify"]}
          type={"circle-icon"}
        />

        <Icon
          additionalClasses={[
            "bg-highlight-dark-50",
            "fg-highlight-light-50",
            "padding-xs",
            "main-text-regular-24",
            "margin-inline-xs",
          ]}
          iconValue={["fa", "floppy-disk"]}
          type={"circle-icon"}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  testID: PropTypes.string,
  additionalClasses: PropTypes.array,
};

export default SearchBar;
