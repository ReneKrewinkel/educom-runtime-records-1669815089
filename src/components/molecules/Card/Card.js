import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Price from "../../atoms/Price/Price";
import Image from "../../atoms/Image/Image";
import Label from "../../atoms/Label/Label";
import Icon from "../../atoms/Icon";
import { Link } from "react-router-dom";
/// TODO: Define props
const Card = (props) => {
  const classes = ["Card", ...(props.additionalClasses || [])].join(" ");

  return (
    <div
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={classes}
    >
      <Link
        to={`/detail/${props.product.data.title}`}
        state={{ product: props.product }}
      >
        <Price
          amount={props.product.data.price}
          size="small"
          additionalClasses={[
            "fg-highlight-light-50",
            " bg-highlight ",
            "default-box-shadow",
          ]}
          type="align-right"
        />
        <Image
          file={props.product.data.file_name}
          additionalClasses={["light-box-shadow"]}
          type="rounded"
        />
      </Link>
      <div className="ellipsis-container">
        <Label
          text={props.product.data.genre}
          additionalClasses={[
            "long-text",
            "fg-highlight",
            "main-text-bold-12",
            "text-align-right",
            "padding-xs",
          ]}
        />
        <div>
          <Label
            text={props.product.data.title}
            additionalClasses={["long-text", "fg-highlight-dark-50", "h5"]}
          />
        </div>
        <div className="flex justify-content-space-between align-items-center">
          <Label
            text={props.product.data.artist}
            additionalClasses={
              ("long-text", ["fg-base-light-50", "main-text-bold-16"])
            }
          />
          <Link
            to={"/shoppingcart"}
            data-object-type="hover-container"
            className="flex align-items-center"
          >
            <Label
              text="add"
              exceptionType={"hover-label"}
              additionalClasses={[
                "fg-highlight",
                "main-text-bold-12",
                "text-align-right",
              ]}
            />
            <Icon
              type="default-icon"
              iconValue={["fa", "arrow-right-long"]}
              additionalClasses={[
                "fg-highlight",

                "main-text-regular-24",
                "hover-right",
              ]}
            />
            <Icon
              additionalClasses={[
                "bg-highlight",
                "fg-highlight-light-50",
                "padding-xs",
                "main-text-regular-12",
              ]}
              iconValue={["fa", "shopping-cart"]}
              type="circle-icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  testID: PropTypes.string,
  additionalClasses: PropTypes.array,
  product: PropTypes.object,
};

export default Card;
