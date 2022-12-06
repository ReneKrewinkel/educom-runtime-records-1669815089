import PropTypes from "prop-types";
import logoBlack from "../../../resources/images/logo-black.svg";
import logoWhite from "../../../resources/images/logo-white.svg";
import logo2 from "../../../resources/images/record-store-day.svg";

/// Default Props defined in Logo.defaultProps
const Logo = (props) => {
  // const size = props.size ? props.size : "small"
  const logos = [
    { type: "logo-black", element: logoBlack },
    { type: "logo-white", element: logoWhite },
    { type: "logo2", element: logo2 },
  ];
  const logo = logos.find((type) => type.type == props.exceptionType).element;

  return (
    <div
      data-testid={props.testID}
      data-object-type={props.exceptionType ?? ""}
      className={"Logo"}
    >
      <img src={logo} className={props.size} alt="Logo" />
    </div>
  );
};

const sizes = ["small", "medium", "large", "extra-large"];
const exceptionClasses = ["logo-black", "logo-white", "logo2"];

Logo.propTypes = {
  testID: PropTypes.string,
  exceptionType: PropTypes.oneOf(exceptionClasses),
  size: PropTypes.oneOf(sizes),
};

Logo.defaultProps = {
  testID: `Logo-${Math.floor(Date.now() / 1000)}`,
  exceptionType: "logo-black",
  size: "medium",
};

export default Logo;
