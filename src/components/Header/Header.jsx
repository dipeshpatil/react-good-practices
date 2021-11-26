import PropTypes from "prop-types";
import clsx from "clsx";

import "./Header.scss";

const DEFAULT_HEADER_CLASS = clsx(["roboto"]);

const Header = ({ text, size = 1, additionalClasses = [] }) => {
  switch (parseInt(size)) {
    case 6:
      return (
        <h6 className={`${DEFAULT_HEADER_CLASS} ${clsx(additionalClasses)}`}>
          {text}
        </h6>
      );
    case 5:
      return (
        <h5 className={`${DEFAULT_HEADER_CLASS} ${clsx(additionalClasses)}`}>
          {text}
        </h5>
      );
    case 4:
      return (
        <h4 className={`${DEFAULT_HEADER_CLASS} ${clsx(additionalClasses)}`}>
          {text}
        </h4>
      );
    case 3:
      return (
        <h3 className={`${DEFAULT_HEADER_CLASS} ${clsx(additionalClasses)}`}>
          {text}
        </h3>
      );
    case 2:
      return (
        <h2 className={`${DEFAULT_HEADER_CLASS} ${clsx(additionalClasses)}`}>
          {text}
        </h2>
      );
    case 1:
    default:
      return (
        <h1 className={`${DEFAULT_HEADER_CLASS} ${clsx(additionalClasses)}`}>
          {text}
        </h1>
      );
  }
};

Header.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
  additionalClasses: PropTypes.array,
};

export default Header;
