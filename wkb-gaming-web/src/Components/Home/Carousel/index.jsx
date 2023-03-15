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
    speed: 1800,
    autoplaySpeed: 2000,
    centerMode: true, // Centra las imágenes
    centerPadding: "10%", 
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
    speed: 1800,
    autoplaySpeed: 2000,rtl: true,
    centerMode: true, // Centra las imágenes
    centerPadding: "10%", 
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
      <div className={Styles.info}><p>Our Projects</p></div>
      <br />
      <div className={Styles.sliderContainer}>
        <Slider {...settings}>
          <div className={Styles.slides2}>
            <img src={Coworking} alt="Coworking" />
          </div>
          <div className={Styles.slides2}>
            <img src={Lineage} alt="Lineage" />
          </div>
          <div className={Styles.slides2}>
            <img src={OnrBranding} alt="OnrBranding" />
          </div>
          <div className={Styles.slides2}>
            <img src={SaltaGaming} alt="SaltaGaming" />
          </div>
        </Slider>
      </div>
      <br />
      <div >
        <Slider {...settings2}>
          <div className={Styles.slides2}>
            <img src={Arvum} alt="Arvum" />
          </div>
          <div className={Styles.slides2}>
            <img src={Caribe} alt="Caribe" />
          </div>
          <div className={Styles.slides2}>
            <img src={OnrMarketing} alt="OnrMarketing" />
          </div>
          <div className={Styles.slides2}>
            <img src={OnrWebsite} alt="OnrWebsite" />
          </div>
        </Slider>
      </div>
    </div>
  );
};
