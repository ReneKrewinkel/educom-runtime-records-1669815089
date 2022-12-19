import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DetailImage from "../../molecules/DetailImage/DetailImage";
import DetailInfo from "../../molecules/DetailInfo/DetailInfo";
import CallToAction from "../../molecules/CallToAction/CallToAction";
import { Link } from "react-router-dom";

/// TODO: Define props
const DetailSection = (props) => {
  return (
    <div data-testid={props.testID} className={"DetailSection"}>
      <DetailImage additionalClasses={["margin-s"]} exceptionType={""} />
      <div className="DetailInfo-container">
        <DetailInfo
          title={"Dickfehler Studio Treffen 1"}
          artist={"Kombynat Robotron"}
          genre={"instrumental, psychedelic rock, space rock, kosmische Musik"}
          shortDescription={
            "This Psychedelic stonker from Drone Rock Records is a live, professionally recorded session from Kombynat Robotron. Designed to be played very loudly, 'Dickfehler Studio Treffen 1' is kosmiche music at its very finest, consisting of lengthy jams filled with sonic diversity and excellent displays of dynamics."
          }
          longDescription={
            "Surfing psychedelic, stoner rock vibes to the edges of outer space, this is a dependably freaky series of jams from an incredibly industrious band."
          }
        />
        <Link to="/shoppingcart" className="CallToAction-container">
          <CallToAction
            additionalClasses={["align-items-center", "padding-xs"]}
            labelValue={"add to cart"}
            colorPalette={"highlight"}
            type={"regular"}
          />
        </Link>
      </div>
    </div>
  );
};

DetailSection.propTypes = {
  testID: PropTypes.string,
};

export default DetailSection;
