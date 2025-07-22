import React, { useState } from "react";
import TestimonialAreaThreeItem from "./TestimonialAreaThreeItem";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperArrows } from "../../lib/hooks/useSwiperArrows";
import { FaDownload, FaTimes } from "react-icons/fa"; // Using FaTimes for cancel
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const TestimonialAreaThree = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const swiper_settings = {
    spaceBetween: 30,
    slidesPerView: 1.5,
    loop: true,
  
    // 🛠 Fix autoplay settings
    autoplay: { 
      delay: 3000, // Delay between slides (3 seconds)
      disableOnInteraction: false, // Keep autoplay working after interaction
      pauseOnMouseEnter: true, // Pause when hovering (optional)
    },
  
    // Smooth Dragging
    grabCursor: true,
    draggable: true,
    simulateTouch: true,
    touchRatio: 1,
    threshold: 5, 
    speed: 600,
  
    // 🛠 Disable `freeMode` (it stops autoplay from working properly)
    freeMode: false,  
  
    breakpoints: {
      1500: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
      992: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      460: { slidesPerView: 1.5 },
      100: { slidesPerView: 1 },
    },
  };
  
  
  

  const images = [
    { image: "/myimages/java.png", certification: "Java Developer" },
    { image: "/myimages/pyt.png", certification: "Python Basics" },
    { image: "/myimages/c.png", certification: "C Programming" },
    { image: "/myimages/python_redhat.png", certification: "Red Hat Python" },
    { image: "/myimages/cybersecurity.png", certification: "Cybersecurity Essentials" },
    { image: "/myimages/datascience.png", certification: "Data Science Fundamentals" },
    { image: "/myimages/azure.png", certification: "Microsoft Azure" },
    { image: "/myimages/python.png", certification: "Python Advanced" },
    { image: "/myimages/ccna.png", certification: "Cisco CCNA" },
  ];

  const { sliderRef, toNext, toPrev } = useSwiperArrows();

  return (
    <section className="testimonial-area-three" style={{ backgroundColor: "black" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="section-title title-style-two white-title mb-45">
              <h2 className="title">Certifications</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="testimonial-nav">
              <button className="swiper-button-prev" onClick={toPrev} />
              <button className="swiper-button-next" onClick={toNext} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Swiper
              {...swiper_settings}
              onBeforeInit={(swiper) => {
                sliderRef.current = swiper;
              }}
            >
              {images.map((img, ind) => (
                <SwiperSlide key={ind}>
                  <TestimonialAreaThreeItem
                    image={img.image}
                    certification={img.certification}
                    onClick={() => setSelectedImage(img.image)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Modal with image, cancel, and download */}
        {selectedImage && (
          <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
            <div className="modal-container">
              <img src={selectedImage} alt="Certificate" className="modal-image" />
              <a href={selectedImage} download className="download-icon-outside">
                <FaDownload size={20} />
              </a>
              <button className="close-btn" onClick={() => setSelectedImage(null)} style={{ color: "white" }}>
                <FaTimes size={24} />
              </button>
            </div>

          </div>
        )}
      </div>

      <div className="testimonial-shape-wrap">
        <img src="/img/images/testimonial_shape01.png" alt="" />
        <img src="/img/images/testimonial_shape02.png" alt="" />
        <img src="/img/images/testimonial_shape03.png" alt="" />
        <img src="/img/images/testimonial_shape04.png" alt="" />
      </div>
    </section>
  );
};

export default TestimonialAreaThree;