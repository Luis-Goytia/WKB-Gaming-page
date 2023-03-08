import React from "react";
import Arvum from "../../../assets/HOME/OUR PROJECTS GALLERY/Project_ ARVUM ESPORTS-min.png";
import Caribe from "../../../assets/HOME/OUR PROJECTS GALLERY/Project_ CARIBE SCHOOL-min.png";
import Coworking from "../../../assets/HOME/OUR PROJECTS GALLERY/Project_ COWORKING SLA-min.png";
import Lineage from "../../../assets/HOME/OUR PROJECTS GALLERY/Project_ LINEAGE 2-min.png";
import OnrBranding from "../../../assets/HOME/OUR PROJECTS GALLERY/Project_ ONR BRANDING-min.png";
import OnrMarketing from "../../../assets/HOME/OUR PROJECTS GALLERY/Project_ ONR MARKETING-min.png";
import OnrWebsite from "../../../assets/HOME/OUR PROJECTS GALLERY/Project_ ONR WEBSITE-min.png";
import SaltaGaming from "../../../assets/HOME/OUR PROJECTS GALLERY/Project_ SALTA GAMING-min.png";
import Slider from "react-slick";
import Styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    margin: "200px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1600,
    autoplaySpeed: 2000,
    margin: "200px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div><p>Our Projects</p></div>
      <div className={Styles.sliderContainer}>
        <Slider {...settings}>
          <div className={Styles.slide}>
            <img src={Coworking} alt="" />
          </div>
          <div className={Styles.slide}>
            <img src={Lineage} alt="" />
          </div>
          <div className={Styles.slide}>
            <img src={OnrBranding} alt="" />
          </div>
          <div className={Styles.slide}>
            <img src={SaltaGaming} alt="" />
          </div>
        </Slider>
      </div>
      <div style={{ width: "100%" }}>
        <Slider {...settings2}>
          <div className={Styles.slide}>
            <img src={Arvum} alt="" />
          </div>
          <div className={Styles.slide}>
            <img src={Caribe} alt="" />
          </div>
          <div className={Styles.slide}>
            <img src={OnrMarketing} alt="" />
          </div>
          <div className={Styles.slide}>
            <img src={OnrWebsite} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};
