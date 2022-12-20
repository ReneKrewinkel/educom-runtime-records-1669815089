import React from "react";
import PropTypes from "prop-types";
import DetailSection from "../../organisms/DetailSection/DetailSection";
import CardGrid from "../../organisms/CardGrid/CardGrid";
import { useParams, useLocation } from "react-router-dom";
/// TODO: Define props
const Detail = (props) => {
  const { type } = useParams();
  const product = useLocation().state.product;

  return (
    <div data-testid={props.testID} className={"Detail"}>
      <DetailSection data={product} />
      <CardGrid data={props.data.slice(0, 4)} />
    </div>
  );
};

Detail.propTypes = {
  testID: PropTypes.string,
  data: PropTypes.array,
};

export default Detail;
