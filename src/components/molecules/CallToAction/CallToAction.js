import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "../../atoms/Icon";
import Label from "../../atoms/Label/Label";

/// TODO: Define props
const CallToAction = (props) => {
  const classes = ["CallToAction", ...(props.additionalClasses || [])].join(
    " "
  );
  let circleIconColors = "";
  let defaultIconColors = "";
  props.colorPalette === "dark"
    ? ((circleIconColors = "bg-highlight-light-50 fg-highlight-dark-50"),
      (defaultIconColors = "fg-highlight-light-50"))
    : ((circleIconColors = "bg-highlight fg-highlight-light-50"),
      (defaultIconColors = "fg-highlight"));

  return (
    <div data-testid={props.testID} className={classes}>
      <Label
        text={props.labelValue}
        additionalClasses={[
          "fg-highlight",
          "main-text-regular-16",
          "text-align-right",
        ]}
      />
      <Icon
        type="default-icon"
        iconValue={["fa", "arrow-right-long"]}
        additionalClasses={[
          defaultIconColors,
          "main-text-regular-28",
          "hover-right",
        ]}
      />
      <Icon
        additionalClasses={[
          circleIconColors,
          "padding-xs",
          "main-text-regular-20",
        ]}
        iconValue={["fa", "shopping-cart"]}
        type="circle-icon"
      />
    </div>
  );
};

CallToAction.propTypes = {
  testID: PropTypes.string,
  additionalClasses: PropTypes.array,
  labelValue: PropTypes.string,
  colorPalette: PropTypes.string,
};

export default CallToAction;
