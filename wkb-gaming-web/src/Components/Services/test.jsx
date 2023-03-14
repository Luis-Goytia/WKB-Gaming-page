import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const options = ["perro", "gato", "gallina", "vaca"];

const Option = ({ option, selectedOption, setSelectedOption }) => (
  <div
    className={`option ${selectedOption === option ? "selected" : ""}`}
    onClick={() => setSelectedOption(option)}
  >
    {option}
  </div>
);

export const StaticSlider = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
  };

  return (
    <div className="static-slider">
      <Slider {...settings}>
        {options.map((option) => (
          <Option
            option={option}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            key={option}
          />
        ))}
      </Slider>
    </div>
  );
};

