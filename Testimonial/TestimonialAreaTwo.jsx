import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import TestimonialAreaTwoItem from "./TestimonialAreaTwoItem";

const TestimonialAreaTwo = () => {
  const slick_settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const testimonial_items = [
    {
      desc: `‘’An outstanding developer with deep expertise in React.js,Node.js,MongoDb. The ability to craft good applications .  

”`,
      title: "Durga sai Prasad",
      designation: "Senior Web Developer",
      src: "/myimages/dsp.jpg",
    },
    {
      desc: `‘’With an incredible eye for UI/UX design, this developer creates sleek, modern, and highly user-friendly applications. 

”`,
      title: "hanumanthu",
      designation: "Full Stack Developer",
      src: "/myimages/hanu.jpg",
    },
    {
      desc: `‘’Highly skilled in coding in C++...have good logical thinking!! Proficient in problem-solving and good competitor.”`,
      title: "Ashok",
      designation: "Competitive Coder",
      src: "/myimages/ashok.jpg",
    },
    {
      desc: `‘’A well-rounded coder with a knack for development. Consistently delivers impactful and creative solutions.. 

”`,
      title: "Yamini",
      designation: "Full Stack Developer",
      src: "/img/images/testimonial_avatar02.png",
    },
    {
      desc: `‘’Expertise in React.js and Next.js shines through in every project. The approach to building scalable applications."

”`,
      title: "Gangadhar",
      designation: "Mern Stack Developer",
      src: "/myimages/gan.jpg",
    },
    {
      desc: `‘’With an incredible eye for UI/UX design, this developer creates sleek, modern, and highly user-friendly applications. 

”`,

      title: "Alekhya",
      designation: "Full Stack Developer",
      src: "/img/images/testimonial_avatar02.png",
    },
    {
      desc: `‘’An all-rounder who excels in coding and development. Brings a dynamic and versatile approach to every project."

”`,
      title: "Karthik",
      designation: "Mern Stack Developer",
      src: "/myimages/loveu.jpg",
    },
    {
      desc: `‘’With an incredible eye for UI/UX design, this developer creates sleek, modern, and highly user-friendly applications. 

”`,
      title: "Keshav",
      designation: "Full Stack Developer",
      src: "/myimages/chen.jpg",
    },

   
    
  ];
  return (
    <section className="testimonial-area-two pt-10 pb-10" style={{backgroundColor:"black", padding:"70px"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title title-style-two white-title text-center mb-60">
              <span className="sub-title">Testimonial</span>
              <h2 className="title">What People Say About Us</h2>
            </div>
          </div>
        </div>

        <div className="row testimonial-active-two">
          <SlickSlider settings={slick_settings}>
            {testimonial_items.map((x, index) => (
              <div key={index} className="col-lg-3" style={{height: "400px"}}>
                <TestimonialAreaTwoItem item={x} />
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAreaTwo;








