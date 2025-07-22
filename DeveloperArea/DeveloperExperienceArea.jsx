import React from "react";

const DeveloperExperienceArea = () => {
  return (
    <div className="developr-img">
      {/* <img src="/img/images/developer_img.png" alt="" /> */}
      <img src="/myimages/images/yuva.jpg" alt="" />
      <div className="work-experience-wrap">
        <h2 className="count">
          <span className="odometer" data-count="18"></span>3+
        </h2>
        <p>Years Of Experience</p>
      </div>
      <div className="project-completed-wrap">
        <h2 className="count">
          <span className="odometer" data-count="5">10</span>+
        </h2>
        <p>Have Faithfully Completed Projects Till Date</p>
      </div>
    </div>
  );
};

export default DeveloperExperienceArea;
