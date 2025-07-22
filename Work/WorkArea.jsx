import React from "react";
import { useParallax } from "react-scroll-parallax";

const WorkArea = () => {
  const parallax = useParallax({
    translateY: [-24, 24],
    rootMargin: 0,
  });

  const work_list = [
    {
      src: "/img/icon/about_icon01.png",
      title: "Concept Creation",
      desc: "I bring ideas to life through innovation, creativity, and strategic thinking. ",
    },
    {
      src: "/img/icon/about_icon02.png",
      title: "Sketch Drawing",
      desc: "I create detailed and visually appealing sketches using Figma to bring ideas to life.",
    },
    {
      src: "/img/icon/about_icon03.png",
      title: "Final Design",
      desc: "I design visually stunning and user-friendly websites, ensuring a seamless digital experience.",
    },
  ];

  return (
    <section className="work-area pt-110 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="work-img text-center">
              <img src="/img/images/work_img.png" alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="work-content">
              <div className="section-title title-style-two white-title mb-30">
                <span className="sub-title">Working Steps</span>
                <h2 className="title">My Working Process</h2>
              </div>

              <div className="work-list">
                <ul className="list-wrap">
                  {work_list.map((x, index) => (
                    <li key={index}>
                      <div className="icon">
                        <img src={x.src} alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">{x.title}</h4>
                        <p>{x.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="work-shape-wrap">
        <img src="/img/images/work_shape01.png" alt="" />
        <img
          src="/img/images/work_shape02.png"
          alt=""
          // data-parallax='{"y" : 80 }'
          ref={parallax.ref}
        />
        <img src="/img/images/work_shape03.png" alt="" />
        <img src="/img/images/work_shape04.png" alt="" />
        <img src="/img/images/work_shape05.png" alt="" />
      </div>
    </section>
  );
};

export default WorkArea;
