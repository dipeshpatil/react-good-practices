import React from "react";
import PropTypes from "prop-types";

const mapStypeDefaultStyles = {
  border: 0,
  width: "100%",
  height: "400px",
};

const MapView = ({ embedLink, title, styles = mapStypeDefaultStyles }) => {
  return (
    <div className="mt-2">
      <iframe
        title={title}
        src={embedLink}
        style={styles ?? mapStypeDefaultStyles}
        loading="lazy"
      ></iframe>
    </div>
  );
};

MapView.propTypes = {
  embedLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  styles: PropTypes.object,
};

export default MapView;
