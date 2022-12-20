import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "../../molecules/Card/Card";

/// TODO: Define props
const CardGrid = (props) => {
  const classes = ["CardGrid", ...(props.additionalClasses || [])].join(" ");

  return (
    <div data-testid={props.testID} className={classes}>
      {props.data.length > 0
        ? props.data.map((product, index) => {
            return (
              <Card
                key={index}
                additionalClasses={["margin-block-m", "margin-inline-s"]}
                product={product}
              />
            );
          })
        : ""}
    </div>
  );
};

CardGrid.propTypes = {
  testID: PropTypes.string,
  additionalClasses: PropTypes.array,
  data: PropTypes.array,
};

export default CardGrid;
