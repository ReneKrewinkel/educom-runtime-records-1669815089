import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DetailImage from "../../molecules/DetailImage/DetailImage";
import DetailInfo from "../../molecules/DetailInfo/DetailInfo";
import CallToAction from "../../molecules/CallToAction/CallToAction";
import { Link } from "react-router-dom";

/// TODO: Define props
const DetailSection = (props) => {
  console.log(props.data);
  return (
    <div data-testid={props.testID} className={"DetailSection"}>
      <DetailImage
        additionalClasses={["margin-s"]}
        exceptionType={""}
        data={props.data}
      />
      <div className="DetailInfo-container">
        <DetailInfo
          title={props.data.data.title}
          artist={props.data.data.artist}
          genre={props.data.data.genre}
          shortDescription={props.data.data.short_description}
          longDescription={props.data.data.long_description}
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
  data: PropTypes.array,
};

export default DetailSection;
