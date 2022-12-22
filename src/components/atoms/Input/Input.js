import { useContext } from "react";
import PropTypes from "prop-types";
import { SearchContext } from "../../../contexts";
const Input = (props) => {
  const classes = ["Input", ...(props.additionalClasses || [])].join(" ");

  const { setSearchValue, setCurrentPage } = useContext(SearchContext);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div data-testid={props.testID}>
      <input
        className={classes}
        type="text"
        placeholder={props.placeholder}
        onChange={handleChange}
      ></input>
    </div>
  );
};

Input.propTypes = {
  testID: PropTypes.string,
  additionalClasses: PropTypes.array,
  placeholder: PropTypes.string,
};

export default Input;
