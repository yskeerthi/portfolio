import React from "react";
import BrandAreaTwo from "../../components/Brand/BrandAreaTwo";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import DeveloperArea from "../../components/DeveloperArea/DeveloperArea";
import InnerServiceAreaTwo from "../../components/ServicesArea/InnerServiceAreaTwo";
import ConsultationAreaTwo from "../../components/Consultation/ConsultationAreaTwo";
import CounterAreaThree from "../../components/CounterArea/CounterAreaThree";
import HistoryArea from "../../components/HistoryArea/HistoryArea";
import InnerServicesArea from "../../components/ServicesArea/InnerServicesArea";
import SuccessArea from "../../components/SuccessArea/SuccessArea";
import TeamAreaTwo from "../../components/Team/TeamAreaTwo";
import TestimonialAreaFour from "../../components/Testimonial/TestimonialAreaFour";
import Layout from "../../layouts/Layout";

const AboutUs = () => {
  return (
    <Layout header={1} footer={1} className="" mainClassName="">
      {/* <h1>About Me</h1> */}
      <BreadcrumbArea
        title="About Me"
        // subtitle={"About Us"}
        // className={"pt-175 pb-140"}
      />
      <DeveloperArea />
      {/* <CounterAreaThree /> */}
      {/* <TeamAreaTwo /> */}
      {/* <ConsultationAreaTwo /> */}
      {/* <InnerServicesArea /> */}
      {/* <SuccessArea /> */}
      <HistoryArea />
      <InnerServiceAreaTwo />
      {/* <TestimonialAreaFour /> */}
      {/* <BrandAreaTwo className={"pb-120"} /> */}
    </Layout>
  );
};

export default AboutUs;
