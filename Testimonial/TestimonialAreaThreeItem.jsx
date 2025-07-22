import React from "react";

const TestimonialAreaThreeItem = ({ image, certification, onClick }) => {
  return (
    <div className="swiper-slide">
      <div className="testimonial-item-three" onClick={onClick}>
        <div className="testimonial-content-three">
          <img src={image} alt="Certificate Thumbnail" className="imgg" />
        </div>
        <div className="certification-bar">{certification}</div> {/* Orange bar with name */}
      </div>
    </div>
  );
};

export default TestimonialAreaThreeItem;