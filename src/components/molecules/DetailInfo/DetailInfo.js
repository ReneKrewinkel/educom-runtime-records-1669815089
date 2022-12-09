import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Label from "../../atoms/Label/Label";

/// TODO: Define props
const DetailInfo = (props) => {
  const classes = ["DetailInfo", ...(props.additionalClasses || [])].join(" ");

  return (
    <div data-testid={props.testID} className={classes}>
      <Label
        text={props.title}
        additionalClasses={["fg-highlight-dark-50", "h3"]}
      />

      <Label
        text={props.artist}
        additionalClasses={["fg-base-light-50", "main-text-bold-20"]}
      />
      <Label
        text={props.genre}
        additionalClasses={["fg-highlight", "main-text-bold-12"]}
      />
      <p className="main-text-regular-16 fg-base-light-50 padding-block-s">
        {props.shortDescription}
      </p>
      <p className="main-text-regular-16 fg-base-light-50 padding-block-s">
        {props.longDescription}
      </p>
    </div>
  );
};

DetailInfo.propTypes = {
  testID: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
  genre: PropTypes.string,
  shortDescription: PropTypes.string,
  longDescription: PropTypes.string,
};

export default DetailInfo;
