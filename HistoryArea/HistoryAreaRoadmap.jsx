import React from "react";

const HistoryAreaRoadmap = () => {
  return (
    <div className="history-roadmap-wrap">
      <div className="roadmap-line-shape">
        <span className="dot-one pulse-one"></span>
        <span className="dot-two pulse-two"></span>
      </div>

      <ul className="list-wrap">
        <li
          className="wow fadeInDown"
          data-wow-delay=".2s"
          data-wow-duration="1.5s"
        >
          <span className="dot pulse-three"></span>
          <div className="content">
            <h5 className="title">2020</h5>
            <p>Grade 10</p>
          </div>
        </li>
        <li
          className="wow fadeInUp"
          data-wow-delay=".2s"
          data-wow-duration="1.5s"
        >
          <span className="dot pulse-four"></span>
          <div className="content">
            <h5 className="title">2022</h5>
            <p>Intermediate(MPC)</p>
          </div>
        </li>
        <li
          className="wow fadeInDown"
          data-wow-delay=".2s"
          data-wow-duration="1.5s"
        >
          <span className="dot pulse-five"></span>
          <div className="content">
            <h5 className="title">2022-2026</h5>
            <p>B.Tech(CSE-AIML)</p>
          </div>
        </li> 
      </ul>
    </div>
  );
};

export default HistoryAreaRoadmap;
