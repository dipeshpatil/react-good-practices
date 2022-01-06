import React from "react";
import PropTypes from "prop-types";

import { Carousel, Image } from "react-bootstrap";

const SimpleImageCarousel = ({ data = [] }) => {
  return (
    <Carousel variant="light" indicators={false} as="slide">
      {data
        .filter((dataItem) => dataItem.show ?? false)
        .map((carousel, idx) => {
          const { text, subText, url, alt, show } = carousel;
          return (
            (show ?? false) && (
              <Carousel.Item key={idx}>
                <Image className="d-block w-100" src={url} alt={alt} />
                {carousel.text && (
                  <Carousel.Caption>
                    <h5>{text}</h5>
                    {(subText ?? false) && <p>{subText}</p>}
                  </Carousel.Caption>
                )}
              </Carousel.Item>
            )
          );
        })}
    </Carousel>
  );
};

SimpleImageCarousel.propTypes = {
  data: PropTypes.array,
};

export default SimpleImageCarousel;
