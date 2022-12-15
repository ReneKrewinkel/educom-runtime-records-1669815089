import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Price from "../../atoms/Price/Price";
import Image from "../../atoms/Image/Image";
import Record from "../../../resources/images/record.png";

/// TODO: Define props
const DetailImage = (props) => {
  const classes = ["DetailImage", ...(props.additionalClasses || [])].join(" ");

  return (
    <div
      data-testid={props.testID}
      data-object-type={props.exceptionType}
      className={classes}
    >
      <Price
        amount={22.5}
        size="small"
        additionalClasses={[
          "fg-highlight-light-50",
          " bg-highlight ",
          "default-box-shadow",
        ]}
        type="align-left"
      />
      {props.exceptionType === "album-display" ? (
        <span className="displayContainer">
          <Image
            file={"mythic-sunship-another-shape-of-psychedelic-music.jpg"}
            additionalClasses={[""]}
            type="regular"
          />
          <img className="record" src={Record} />
        </span>
      ) : (
        <Image
          file={"mythic-sunship-another-shape-of-psychedelic-music.jpg"}
          additionalClasses={["light-box-shadow"]}
          type="rounded"
        />
      )}
    </div>
  );
};

DetailImage.propTypes = {
  testID: PropTypes.string,
  additionalClasses: PropTypes.array,
  exceptionType: PropTypes.string,
};

export default DetailImage;
