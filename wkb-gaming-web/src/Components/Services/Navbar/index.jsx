import React from "react";
import WKB from "../../../assets/HOME/WKB LOGOS/Símbolo Walker Bear.svg";
import Slider from "react-slick";
import Styles from "./Navbar.module.css";
export const Navbar = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };
  return (
    <div className={Styles.container}>
      <nav>
        <div className={Styles.logo}>
          <a href="/">
            <img src={WKB} alt="WKB" />
          </a>
        </div>
        <div className={Styles.services}>
          {/* <Slider {...settings}> */}
            <div className={Styles.option}>
              <a href="/Services/AppGames">App & Games Development</a>
                  </div>
                  &bull;
            <div className={Styles.option}>
              <a href="/Services/EsportServices">Esport Services</a>
            </div>
            &bull;
            <div className={Styles.option}>
              <a href="/Services/ProductDesing">Digital Product Design</a>
                  </div>
                  &bull;
            <div className={Styles.option}>
              <a href="/Services/Marketing">Marketing & Comunication</a>
            </div>
          {/* </Slider> */}
        </div>
        <div>
          <p>Contact</p>
        </div>
      </nav>
    </div>
  );
};
