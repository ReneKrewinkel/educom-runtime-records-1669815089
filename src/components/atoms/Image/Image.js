import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/// TODO: Define props
const Image = (props) => {
  const style = props.type === "rounded" ? "15px" : "";
  const shadow = props.shadow === true ? "light-box-shadow" : "";
  return (
    <img
      data-testid={props.testID}
      className={`Image ${shadow}`}
      style={{ borderRadius: style }}
      src={require(`../../../resources/images/${props.file}`)}
    />
  );
};

Image.propTypes = {
  testID: PropTypes.string,
  file: PropTypes.string.isRequired,
  type: PropTypes.oneOf("rounded", "regular"),
  shadow: PropTypes.bool,
};

export default Image;
