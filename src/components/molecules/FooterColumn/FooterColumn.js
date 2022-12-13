import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "../../atoms/Icon";
import Label from "../../atoms/Label/Label";

/// TODO: Define props
const FooterColumn = (props) => {
  const classes = ["FooterColumn", ...(props.additionalClasses || [])].join(
    " "
  );

  if (props.type === "text") {
    return (
      <div
        data-testid={props.testID}
        data-object-type={props.type}
        className={classes}
      >
        <div className="heading">
          {typeof props.heading === "string" ? (
            <Label
              text={props.heading}
              additionalClasses={["fg-highlight-light-50", "h6"]}
            />
          ) : (
            props.heading
          )}
        </div>

        <ul>
          {props.content.map((li, index) => {
            return (
              <li className="flex align-items-center" key={index}>
                {li.icon == "" || li.icon == undefined ? (
                  ""
                ) : (
                  <Icon
                    additionalClasses={[
                      "fg-base-light-50",
                      "main-text-regular-24",
                    ]}
                    iconValue={li.icon}
                    type={"default-icon"}
                  />
                )}
                <Label
                  text={li.text}
                  additionalClasses={["fg-base-light-50", "main-text-bold-12"]}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div
        data-testid={props.testID}
        data-object-type={props.type}
        className={classes}
      >
        {props.content.map((li, index) => {
          return li;
        })}
      </div>
    );
  }
};

/// TODO: Adjust and extend
const exceptionClasses = ["text", "images"];

FooterColumn.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
  content: PropTypes.array,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  additionalClasses: PropTypes.array,
};

export default FooterColumn;
