import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Image from "../../atoms/Image/Image";
import Label from "../../atoms/Label/Label";
import Price from "../../atoms/Price/Price";
import Icon from "../../atoms/Icon";

/// TODO: Define props
const Item = (props) => {
  const classes = ["Item", ...(props.additionalClasses || [])].join(" ");

  return (
    <div data-testid={props.testID} className={classes}>
      <div className="flex align-items-center">
        <Image
          type={"rounded"}
          file={"mythic-sunship-another-shape-of-psychedelic-music.jpg"}
          size={"small"}
        />

        <div className="ellipsis-container">
          <div>
            <Label
              text={"Another Shape of Psychedelic Music"}
              additionalClasses={[
                "long-text",
                "fg-highlight-dark-50",
                "main-text-bold-24",
              ]}
            />
            <Label
              text={"Mythic Sunship"}
              additionalClasses={[
                "long-text",
                "fg-base-light-50",
                "main-text-bold-16",
              ]}
            />
          </div>
        </div>
      </div>
      <div className="flex align-items-center">
        <Price
          size={"regular"}
          amount={22.5}
          additionalClasses={[
            "fg-highlight-light-50",
            " bg-highlight ",
            "default-box-shadow",
          ]}
        />
        <Icon
          additionalClasses={[
            "fg-highlight-dark-50",
            "padding-xs",
            "main-text-regular-16",
            "margin-inline-xs",
          ]}
          type={"default-icon"}
          iconValue={["fa", "trash"]}
        />
      </div>
    </div>
  );
};

Item.propTypes = {
  testID: PropTypes.string,
  additionalClasses: PropTypes.array,
};

export default Item;
