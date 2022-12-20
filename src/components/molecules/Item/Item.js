import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Image from "../../atoms/Image/Image";
import Label from "../../atoms/Label/Label";
import Price from "../../atoms/Price/Price";
import Icon from "../../atoms/Icon";

/// TODO: Define props
const Item = (props) => {
  const classes = ["Item", ...(props.additionalClasses || [])].join(" ");
  const item = props.data.product;
  return (
    <div data-testid={props.testID} className={classes}>
      <div className="flex align-items-center">
        <Image type={"rounded"} file={item.data.file_name} size={"small"} />

        <div className="ellipsis-container">
          <div>
            <Label
              text={item.data.title}
              additionalClasses={["long-text", "fg-highlight-dark-50", "h4"]}
            />
            <Label
              text={item.data.artist}
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
          size={"medium"}
          amount={item.data.price}
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
          type={"circle-icon"}
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
