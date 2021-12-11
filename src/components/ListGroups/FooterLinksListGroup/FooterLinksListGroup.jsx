import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./FooterLinksListGroup.scss";

const isDark = JSON.parse(localStorage.isDark);

const DispatchListGroupType = ({ children, type }) => {
  const allowedTypes = ["ordered", "unordered"];

  return allowedTypes.includes(type) && type === "unordered" ? (
    <ul className="footer-list">{children}</ul>
  ) : (
    <ol className="footer-list">{children}</ol>
  );
};

const FooterLinksListGroup = ({ listType, listData = [] }) => {
  return (
    <DispatchListGroupType type={listType}>
      {listData.map((listItem, idx) => {
        const { title, link, show, icon } = listItem;

        return (
          show && (
            <li key={idx}>
              {(icon ?? false) && (
                <span>
                  <i className={clsx(["bi", `bi-${icon}`, "social-icon"])}></i>
                </span>
              )}
              <a
                className={clsx([
                  "footer_link",
                  "readex-pro",
                  "readex-pro__light",
                  isDark ? "text-light" : "text-dark",
                ])}
                href={link}
              >
                {title}
              </a>
            </li>
          )
        );
      })}
    </DispatchListGroupType>
  );
};

DispatchListGroupType.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
};

FooterLinksListGroup.propTypes = {
  listType: PropTypes.string,
  listData: PropTypes.array,
};

export default FooterLinksListGroup;
