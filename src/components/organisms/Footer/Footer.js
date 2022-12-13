import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FooterColumn from "../../molecules/FooterColumn/FooterColumn";
import Logo from "../../atoms/Logo/Logo";
import LogoIcon from "../../atoms/LogoIcon/LogoIcon";

/// TODO: Define props
const Footer = (props) => {
  const classes = ["Footer", ...(props.additionalClasses || [])].join(" ");

  return (
    <div data-testid={props.testID} className={classes}>
      <FooterColumn
        heading={<Logo size="small" exceptionType={"logo-white"} />}
        content={[
          { icon: ["fa", "envelope"], text: "info@runtime-records.com" },
          { icon: ["fa", "record-vinyl"], text: "discogs.com/runtime-records" },
          {
            icon: ["fab", "square-facebook"],
            text: "facebook.com/runtime-records",
          },
          { icon: ["fab", "twitter"], text: "@RuntimeRecords" },
          { icon: ["fab", "instagram"], text: "@RuntimeRecords" },
        ]}
        type={"text"}
      />
      <FooterColumn
        heading={"info"}
        content={[
          { icon: [""], text: "About us" },
          { icon: [""], text: "Privacy Policy" },
          { icon: [""], text: "Shipping" },
        ]}
        type={"text"}
      />

      <FooterColumn
        content={[
          <Logo size={"extra-large"} exceptionType={"logo2"} />,
          <LogoIcon size={"large"} type={"logo-icon-white"} />,
        ]}
        type={"images"}
        additionalClasses={["flex", " align-items-center"]}
      />
    </div>
  );
};

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!

Footer.propTypes = {
  testID: PropTypes.string,
  additionalClasses: PropTypes.array,
};

export default Footer;
