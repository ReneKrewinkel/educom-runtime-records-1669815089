import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Label from "../../atoms/Label/Label";
import CallToAction from "../CallToAction/CallToAction";
import Button from "../../atoms/Button/Button";

/// TODO: Define props
const HeroTextContent = (props) => {
  return (
    <div data-testid={props.testID} className={`HeroTextContent `}>
      <Label
        text={"Adulkt Life"}
        additionalClasses={["fg-base-light-50", "main-text-bold-20"]}
      />
      <Label
        text={"Book of Curses"}
        additionalClasses={["fg-highlight-light-50", "h3"]}
      />
      <p className="main-text-regular-16 fg-highlight-light-50 padding-block-xs">
        This blistering punk-rock debut fom a 55-year-old veteran of the scene
        delivers urgent music for evergreen unease. These are weary, angry
        songs, crafted with an insatiable verve and an almost triumphant fury.
      </p>
      <Label
        text={"post punk, indie, punk"}
        additionalClasses={["fg-highlight", "main-text-bold-12"]}
      />
      <div className="flex justify-content-space-between align-items-center margin-block-s">
        <CallToAction
          additionalClasses={["align-items-center", "padding-xs"]}
          colorPalette={"dark"}
          type={"no-label"}
        />
        <Button
          additionalClasses={[
            "bg-highlight",
            "fg-highlight-light-50",
            "main-text-bold-12",
          ]}
          text={"read more"}
        />
      </div>
    </div>
  );
};

HeroTextContent.propTypes = {
  testID: PropTypes.string,
};

export default HeroTextContent;
