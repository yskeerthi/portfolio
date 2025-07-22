import React from "react";
import TestimonialAreaThreeItem from "./TestimonialAreaThreeItem";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/core";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperArrows } from "../../lib/hooks/useSwiperArrows";

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const TestimonialAreaFour = () => {
  const swiper_settings = {
    spaceBetween: 30,
    slidesPerView: 1.5,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: true },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1.5,
      },
    },
  };

  const { sliderRef, toNext, toPrev } = useSwiperArrows();

  return (
    <section className="testimonial-area-three testimonial-area-four">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="section-title title-style-two mb-45">
              <h2 className="title">What Our Client’s Say</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="testimonial-nav">
              <button className="swiper-button-prev" onClick={toPrev}></button>
              <button className="swiper-button-next" onClick={toNext}></button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="swiper-container testimonial-active-three">
              <div className="swiper-wrapper">
                <Swiper
                  {...swiper_settings}
                  onBeforeInit={(swiper) => {
                    sliderRef.current = swiper;
                  }}
                >
                  {[1, 2, 3, 2].map((x) => (
                    <SwiperSlide key={x + Math.random()}>
                      <TestimonialAreaThreeItem id={x} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAreaFour;
