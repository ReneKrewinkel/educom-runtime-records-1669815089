import { useContext } from "react";
import PropTypes from "prop-types";
import DetailImage from "../../molecules/DetailImage/DetailImage";
import DetailInfo from "../../molecules/DetailInfo/DetailInfo";
import CallToAction from "../../molecules/CallToAction/CallToAction";
import { Link } from "react-router-dom";
import CartContext from "../../../contexts";

/// TODO: Define props
const DetailSection = (props) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div data-testid={props.testID} className={"DetailSection"}>
      <DetailImage exceptionType={""} data={props.data} />
      <div className="DetailInfo-container">
        <DetailInfo
          title={props.data.data.title}
          artist={props.data.data.artist}
          genre={props.data.data.genre}
          shortDescription={props.data.data.short_description}
          longDescription={props.data.data.long_description}
        />
        <Link
          to="/shoppingcart"
          className="CallToAction-container"
          onClick={() => addToCart(props.data)}
        >
          <CallToAction
            additionalClasses={["align-items-center", "padding-xs"]}
            labelValue={"add to cart"}
            colorPalette={"highlight"}
            type={"regular"}
          />
        </Link>
      </div>
      <div className="responsive-s-container">
        <p className="main-text-regular-16 fg-base-light-50 padding-block-s">
          {props.data.data.short_description}
        </p>
        <p className=" main-text-regular-16 fg-base-light-50">
          {props.data.data.long_description}
        </p>
        <Link
          to="/shoppingcart"
          className="CallToAction-container"
          onClick={() => addToCart(props.data)}
        >
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
