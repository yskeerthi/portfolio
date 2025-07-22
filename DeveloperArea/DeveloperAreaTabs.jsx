import React from "react";
import { motion } from "framer-motion";

const bounceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
};

const DeveloperAreaTabs = () => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {["My Details", "My Achievements", "My Interests"].map((tab, index) => {
          const tabId = tab.toLowerCase().replace(/\s+/g, "-");
          return (
            <li className="nav-item" role="presentation" key={index}>
              <button
                className={`nav-link ${index === 0 ? "active" : ""}`}
                id={`${tabId}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#${tabId}-tab-pane`}
                type="button"
                role="tab"
                aria-controls={`${tabId}-tab-pane`}
                aria-selected={index === 0 ? "true" : "false"}
                style={{
                  color: index === 0 ? "orange" : "white",
                  transition: "color 0.3s ease-in-out"
                }}
                onClick={(e) => {
                  document.querySelectorAll(".nav-link").forEach((btn) => {
                    btn.style.color = "white";
                  });
                  e.target.style.color = "orange";
                }}
              >
                {tab}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="tab-content" id="myTabContent">
        {/* My Details Section */}
        <div
          className="tab-pane fade show active"
          id="my-details-tab-pane"
          role="tabpanel"
          aria-labelledby="my-details-tab"
          tabIndex="0"
        >
          <motion.div className="developer-info-wrap" variants={bounceVariants} initial="hidden" animate="visible">
            <div className="row">
              <div className="col-md-6">
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon01.png" alt="Name" />
                    </div>
                    <div className="content" style={{color:"white"}}>
                      <span>Name:</span>
                      <p>Keerthi Chodisetti</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon02.png" alt="Email" />
                    </div>
                    <div className="content" style={{color:"white"}}>
                      <span>Email:</span>
                      <p>keerthichodisetti@gmail.com</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon03.png" alt="Language" />
                    </div>
                    <div className="content"  style={{color:"white"}}>
                      <span>Language:</span>
                      <p>English</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/whi_d.png" alt="Degree" style={{width:"100px",height:"50px"}}/>
                    </div>
                    <div className="content"  style={{color:"white"}}>
                      <span>Degree:</span>
                      <p>Bachelor of Technology</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon04.png" alt="Phone" />
                    </div>
                    <div className="content"  style={{color:"white"}}>
                      <span>Phone No:</span>
                      <p>9876543210</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon05.png" alt="Address" />
                    </div>
                    <div className="content"  style={{color:"white"}}>
                      <span>Address:</span>
                      <p>Banjara Hills, Hyderabad, India</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon06.png" alt="Nationality" />
                    </div>
                    <div className="content"  style={{color:"white"}}>
                      <span>Nationality:</span>
                      <p>Indian</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/college.png" alt="College" style={{width:"70px",height:"40px"}} />
                    </div>
                    <div className="content"  style={{color:"white"}}>
                      <span>College:</span>
                      <p>Aditya University</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* My Achievements Section */}
        <div className="tab-pane fade" id="my-achievements-tab-pane" role="tabpanel" aria-labelledby="my-achievements-tab" tabIndex="0">
          <motion.div className="developer-info-wrap" variants={bounceVariants} initial="hidden" animate="visible">
            <ul className="list-wrap"  style={{color:"white"}}>
              {[
                "🏆 Won Best Developer Award",
                "🚀 Completed 7+ Projects",
                "📖 won first prize in Poster Presentation",
                "🎤 Speaker at Events"
              ].map((text, index) => (
                <motion.li key={index} whileHover={{ color: "#F89E52" }}>
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* My Interests Section */}
        <div className="tab-pane fade" id="my-interests-tab-pane" role="tabpanel" aria-labelledby="my-interests-tab" tabIndex="0">
          <motion.div className="developer-info-wrap" variants={bounceVariants} initial="hidden" animate="visible">
            <ul className="list-wrap"  style={{color:"white"}}>
              {[
                "💡 Passionate about AI & ML",
                "🔧 Love building scalable apps",
                "🖥️ Enjoy coding and developing real time ideas",
                "📚 Always learning new technologies"
              ].map((text, index) => (
                <motion.li key={index} whileHover={{ color: "#F89E52" }}>
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default DeveloperAreaTabs;
