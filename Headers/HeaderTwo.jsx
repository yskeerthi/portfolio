import React, { useEffect } from "react";
import $ from "jquery";
import cn from "classnames";

const HeaderTwo = () => {
  useEffect(() => {
    /*=============================================
    =     Menu sticky & Scroll to top      =
    =============================================*/
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $("#sticky-header").removeClass("sticky-menu");
        $(".scroll-to-target").removeClass("open");
      } else {
        $("#sticky-header").addClass("sticky-menu");
        $(".scroll-to-target").addClass("open");
      }
    });

    // Mobile Nav Hide Show
    if ($(".mobile-menu").length) {
      var mobileMenuContent = $(".menu-area .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").html(mobileMenuContent); // Replaces existing content instead of appending

      // Dropdown Button
      $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(300);
        }
      );

      // Menu Toggle Btn
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });

      // Menu Toggle Btn
      $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible");
      });
    }

    /*=============================================
    =          header btn active               =
    =============================================*/
    $(".header-btn").on("click", function () {
      $(".header-contact-wrap, .body-contact-overlay").toggleClass("active");
      $("body").toggleClass("fix");
      return false;
    });
    $(".body-contact-overlay").on("click", function () {
      $(".header-contact-wrap, .body-contact-overlay").removeClass("active");
      $("body").removeClass("fix");
      return false;
    });
  }, []);

  return (
    <>
      <header>
        <div
          id="sticky-header"
          className="menu-area menu-style-two transparent-header"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler">
                  <i className="fas fa-bars"></i>
                </div>

                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="nav-logo">
                      <a href="/">
                        <h1 className="gradient-text">KEERTHI</h1>
                      </a>
                    </div>
                    
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className={cn("")}>
                          <a href="#Home">Home</a>
                        </li>
                        <li className={cn("")}>
                          <a href="#AboutMe">About Me</a>
                        </li>
                        <li className={cn("")}>
                          <a href="#Edu">Education</a>
                        </li>
                        <li className={cn("menu-item-has-children")}>
                          <a href="#skills">Skills</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#certfications">Certifications</a>
                            </li>
                            <li>
                              <a href="#coding">Coding</a>
                            </li>
                          </ul>
                        </li>
                        <li className={cn("")}>
                          <a href="#projects">Projects</a>
                        </li>
                        <li className={cn("")}>
                          <a href="#review">Reviews</a>
                        </li>
                        <li className={cn("")}>
                          <a href="#contact">Contact</a>
                        </li>
                        <li className={cn("")}>
                          <a href="autodesk_resume.pdf" download="keerthi_resume.pdf">Download CV</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* Mobile Menu */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn">
                      <i className="fas fa-times"></i>
                    </div>
                    <div className="logo">
                      <a href="/">
                        <h1 className="gradient-text">кєєятнι</h1>
                      </a>
                    </div>
                    <div className="menu-outer">
                      {/* Mobile menu items will be injected here */}
                      <li className={cn("menu-item-has-children")}>
                          <a href="#skills">Skills</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#certfications">Certifications</a>
                            </li>
                            <li>
                              <a href="#coding">Coding</a>
                            </li>
                          </ul>
                        </li>

                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop"></div>
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};


export default HeaderTwo;
