import React from "react";
import PropTypes from "prop-types";

import { Carousel, Image } from "react-bootstrap";

const SimpleImageCarousel = ({ data = [] }) => {
  return (
    <Carousel variant="light">
      {data.map((carousel, idx) => {
        return (
          <Carousel.Item key={idx}>
            <Image
              className="d-block w-100"
              src={carousel.url}
              alt={carousel.alt}
            />

            {carousel.text && (
              <Carousel.Caption>
                <h5>{carousel.text}</h5>
                {carousel.subText && <p>{carousel.subText}</p>}
              </Carousel.Caption>
            )}
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

SimpleImageCarousel.propTypes = {
  data: PropTypes.array,
};

export default SimpleImageCarousel;
