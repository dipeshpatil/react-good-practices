import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Header.scss";

const DEFAULT_HEADER_CLASS = ["roboto"];

const Header = ({ text, children, size = 1, additionalClasses = [] }) => {
  const headerClasses = clsx([...DEFAULT_HEADER_CLASS, ...additionalClasses]);
  const headerSize = isNaN(size) ? 1 : parseInt(size);

  switch (headerSize) {
    case 6:
      return <h6 className={headerClasses}>{text ?? children}</h6>;
    case 5:
      return <h5 className={headerClasses}>{text ?? children}</h5>;
    case 4:
      return <h4 className={headerClasses}>{text ?? children}</h4>;
    case 3:
      return <h3 className={headerClasses}>{text ?? children}</h3>;
    case 2:
      return <h2 className={headerClasses}>{text ?? children}</h2>;
    case 1:
    default:
      return <h1 className={headerClasses}>{text ?? children}</h1>;
  }
};

Header.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  additionalClasses: PropTypes.array,
};

export default Header;
