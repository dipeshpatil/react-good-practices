import React from "react";

const mapStypeDefaultProps = {
  border: 0,
  width: "100%",
  height: "400px",
};

const MapView = ({ embedLink, title }) => {
  return (
    <div className="mt-2">
      <iframe
        title={title}
        src={embedLink}
        style={mapStypeDefaultProps}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapView;
