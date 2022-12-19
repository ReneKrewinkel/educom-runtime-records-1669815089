import React from "react";
import PropTypes from "prop-types";
import DetailSection from "../../organisms/DetailSection/DetailSection";
import CardGrid from "../../organisms/CardGrid/CardGrid";

/// TODO: Define props
const Detail = (props) => {
  return (
    <div data-testid={props.testID} className={"Detail"}>
      <DetailSection />
      <CardGrid data={props.data.slice(0, 4)} />
    </div>
  );
};

Detail.propTypes = {
  testID: PropTypes.string,
  data: PropTypes.array,
};

export default Detail;
