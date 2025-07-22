import React from "react";
import Layout from "../../layouts/Layout";
import BannerTwo from "../../components/Banner/BannerTwo";
import TestimonialAreaTwo from "../../components/Testimonial/TestimonialAreaTwo";
import Contact from "../../components/Contact/Contact";
import ServiceAreaThree from "../../components/ServicesArea/ServiceAreaThree";
import DeveloperArea from "../../components/DeveloperArea/DeveloperArea";
import HistoryArea from "../../components/HistoryArea/HistoryArea";
import CaseStudy from "../../components/CaseStudy/CaseStudy";
import TestimonialAreaThree from "../../components/Testimonial/TestimonialAreaThree";
import InnerServiceAreaTwo from "../../components/ServicesArea/InnerServiceAreaTwo";
import DownloadOwn from "./Download";

const PersonalPortfolio = () => {
  return (
    <Layout header={1} footer={1} className="black-background">
      <div id="Home">
      <BannerTwo />
      </div>
      
      <div id="AboutMe">
      <DeveloperArea />
      </div>


      <div id="Edu">
      <HistoryArea />

      </div>


      <div id="skills">
      <InnerServiceAreaTwo />
      </div>

      <div  id="projects">
      <CaseStudy />

      </div>


      
      <div id="certfications">
      <TestimonialAreaThree />
      </div>

      <div id="coding">
      <ServiceAreaThree />
      </div>
     
      <div id="review">
      <TestimonialAreaTwo />
      </div>
      

      <div id="contact">

      <Contact />

      </div>

      <div id="down">
        <DownloadOwn />
      </div>
      
    </Layout>
  );
};

export default PersonalPortfolio;
