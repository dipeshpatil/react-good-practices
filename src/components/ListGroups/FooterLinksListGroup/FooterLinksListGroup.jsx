import clsx from "clsx";
import React from "react";

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

const DispatchSocialLinksListGroup = ({ socialData }) => {
  return (
    <ul className="footer-list">
      {socialData.map((socialLink, idx) => {
        const { link, title, icon } = socialLink;

        return (
          <li key={idx}>
            <span>
              <i className={clsx(["bi", `bi-${icon}`, "social-icon"])}></i>
            </span>
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
        );
      })}
    </ul>
  );
};

const FooterLinksListGroup = ({ category, listType, listData = [] }) => {
  return category !== "social_links" ? (
    <DispatchListGroupType type={listType}>
      {listData.map((listItem, idx) => {
        const { title, link, show } = listItem;

        return (
          show && (
            <li key={idx}>
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
  ) : (
    <DispatchSocialLinksListGroup socialData={listData} />
  );
};

export default FooterLinksListGroup;
