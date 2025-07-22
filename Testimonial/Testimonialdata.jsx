import React from "react";
import TestimonialAreaThreeItem from "./TestimonialAreaThreeItem";

const testimonials = [
  {
    id: 1,
    name: "James Botosh",
    role: "Product Designer",
    image: "/img/images/testimonial_avatar01.png",
    review: "We seek to get involved early in the design phase...",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: "/img/images/testimonial_avatar02.png",
    review: "The collaboration was seamless and very effective...",
  },
  {
    id: 3,
    name: "David Lee",
    role: "Software Engineer",
    image: "/img/images/testimonial_avatar03.png",
    review: "An amazing experience working with the team...",
  },
];

const TestimonialList = () => {
  return (
    <div className="testimonial-wrapper">
      {testimonials.map((testimonial) => (
        <TestimonialAreaThreeItem key={testimonial.id} {...testimonial} />
      ))}
    </div>
  );
};

export default TestimonialList;
