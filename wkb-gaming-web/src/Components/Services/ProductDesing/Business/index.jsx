import React from "react";
import Business1 from "../../../../assets/Services/img/ProductDesing/Business/Business Digitalitation-min.png";
import Business2 from "../../../../assets/Services/img/ProductDesing/Business/Business Digitalitation-1-min.png";
import Business3 from "../../../../assets/Services/img/ProductDesing/Business/Business Digitalitation-2-min.png";
import Business4 from "../../../../assets/Services/img/ProductDesing/Business/Business Digitalitation-3-min.png";

export const Business = () => {
  return (
    <div>
      <div>
        <h1>Mobile App Development</h1>
      </div>
      <div>
        <p>
          We help you to became an idea to real app using programming for your
          project.
        </p>
        <p>
          We set up the development process from scratch and take full
          responsibility for the project risks: from timelines and budget to the
          final software quality.
        </p>
      </div>
      <div>
        <div>
          <img src={Business1} alt="Business1" />
        </div>
        <div>
          <img src={Business2} alt="Business2" />
        </div>
        <div>
          <img src={Business3} alt="Business3" />
        </div>
        <div>
          <img src={Business4} alt="Business4" />
        </div>
      </div>
      <div>
        <div>
          <h2>Problem</h2>
        </div>
      </div>
      <div>
        <div>
          <h2>How is our workflow</h2>
        </div>
      </div>
      <div>
        <div>
          <h2>Key Benefits</h2>
        </div>
      </div>
    </div>
  );
};
