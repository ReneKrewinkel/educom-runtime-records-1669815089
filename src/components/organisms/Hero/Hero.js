import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HeroTextContent from "../../molecules/HeroTextContent/HeroTextContent";
import DetailImage from "../../molecules/DetailImage/DetailImage";

import Backdrop from "../../../resources/images/backdrop.jpg";

/// TODO: Define props
const Hero = (props) => {
  const classes = ["Hero", ...(props.additionalClasses || [])].join(" ");
  return (
    <div
      data-testid={props.testID}
      className={classes}
      style={{
        backgroundImage: `url(${Backdrop})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div className="inner-section">
        <HeroTextContent data={props.data} />
        <div className="DetailImage-container">
          <DetailImage exceptionType={"album-display"} data={props.data} />
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  testID: PropTypes.string,
  additionalClasses: PropTypes.array,
  data: PropTypes.object,
};

export default Hero;
