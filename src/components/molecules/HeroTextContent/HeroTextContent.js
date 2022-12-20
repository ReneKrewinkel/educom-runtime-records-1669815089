import { useContext } from "react";
import PropTypes from "prop-types";
import Label from "../../atoms/Label/Label";
import CallToAction from "../CallToAction/CallToAction";
import Button from "../../atoms/Button/Button";
import { Link } from "react-router-dom";
import CartContext from "../../../contexts";

/// TODO: Define props
const HeroTextContent = (props) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div data-testid={props.testID} className={`HeroTextContent `}>
      <Label
        text={props.data.data.artist}
        additionalClasses={["fg-base-light-50", "main-text-bold-20"]}
      />
      <Label
        text={props.data.data.title}
        additionalClasses={["fg-highlight-light-50", "h3"]}
      />
      <p className="main-text-regular-16 fg-highlight-light-50 padding-block-xs">
        {props.data.data.long_description}
      </p>
      <Label
        text={props.data.data.genre}
        additionalClasses={["fg-highlight", "main-text-bold-12"]}
      />
      <div className="flex justify-content-space-between align-items-center margin-block-s">
        <Link to={"/shoppingcart"} onClick={() => addToCart(props.data)}>
          <CallToAction
            additionalClasses={["align-items-center", "padding-xs"]}
            colorPalette={"dark"}
            type={"no-label"}
          />
        </Link>
        <Link to="/detail">
          <Button
            additionalClasses={[
              "bg-highlight",
              "fg-highlight-light-50",
              "main-text-bold-12",
            ]}
            text={"read more"}
          />
        </Link>
      </div>
    </div>
  );
};

HeroTextContent.propTypes = {
  testID: PropTypes.string,
  data: PropTypes.object,
};

export default HeroTextContent;
