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
          <div className={Styles.slides}>
            <img src={Coworking} alt="Coworking" />
          </div>
          <div className={Styles.slides}>
            <img src={Lineage} alt="Lineage" />
          </div>
          <div className={Styles.slides}>
            <img src={OnrBranding} alt="OnrBranding" />
          </div>
          <div className={Styles.slides}>
            <img src={SaltaGaming} alt="SaltaGaming" />
          </div>
        </Slider>
      </div>
      <div >
        <Slider {...settings2}>
          <div className={Styles.slides}>
            <img src={Arvum} alt="Arvum" />
          </div>
          <div className={Styles.slides}>
            <img src={Caribe} alt="Caribe" />
          </div>
          <div className={Styles.slides}>
            <img src={OnrMarketing} alt="OnrMarketing" />
          </div>
          <div className={Styles.slides}>
            <img src={OnrWebsite} alt="OnrWebsite" />
          </div>
        </Slider>
      </div>
    </div>
  );
};
