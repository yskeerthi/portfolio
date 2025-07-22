import React from "react";
import HistoryAreaRoadmap from "./HistoryAreaRoadmap";

const HistoryArea = () => {
  return (
    <section className="history-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title white-title text-center mb-45">
              <span className="sub-title">My Education</span>
              <h2 className="title">Chalk to Code</h2>
              <p>
              "I started with school lessons, now I'm building software solutions—every step counts, and I'm embracing the journey while pushing forward!" 🚀
              </p>
            </div>
          </div>
        </div>
        <div className="history-inner">
          <div className="history-img">
            <img src="/img/images/history_img.jpg" alt="" />
          </div>
          <div className="row g-0 justify-content-end">
            <div className="col-lg-6">
              <div className="history-content">
                <h2 className="title">
                  The Intention was to Establish The Company
                </h2>
                <p>
                The intention was never just to start a company—it was to build something impactful. A place where technology meets innovation, where every line of code solves a real problem, and where development isn't just about writing software but about creating experiences that matter.
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="far fa-check"></i> Full-Stack Innovation – Crafting seamless digital solutions from frontend to backend with cutting-edge technologies.
                  </li>
                  <li>
                    <i className="far fa-check"></i>Scalable & Robust Systems – Developing applications that not only work today but scale for the future.
                  </li>
                  <li>
                    <i className="far fa-check"></i>Turning visionary concepts into fully functional, high-performance platforms.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* road map */}
        <HistoryAreaRoadmap />
      </div>

      <div className="history-shape-wrap">
        <img src="/img/images/history_shape01.png" alt="" />
        <img src="/img/images/history_shape02.png" alt="" />
      </div>
    </section>
  );
};

export default HistoryArea;
