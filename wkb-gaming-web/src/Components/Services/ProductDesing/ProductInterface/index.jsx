import React from "react";
import ProductInterface1 from "../../../../assets/Services/img/ProductDesing/ProductInterface/Product Interface Design & Prototype-min.png";
import ProductInterface2 from "../../../../assets/Services/img/ProductDesing/ProductInterface/Product Interface Design & Prototype-1-min.png";
import ProductInterface3 from "../../../../assets/Services/img/ProductDesing/ProductInterface/Product Interface Design & Prototype-2-min.png";
import ProductInterface4 from "../../../../assets/Services/img/ProductDesing/ProductInterface/Product Interface Design & Prototype-3-min.png";

export const ProductInterface = () => {
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
          <img src={ProductInterface1} alt="ProductInterface1" />
        </div>
        <div>
          <img src={ProductInterface2} alt="ProductInterface2" />
        </div>
        <div>
          <img src={ProductInterface3} alt="ProductInterface3" />
        </div>
        <div>
          <img src={ProductInterface4} alt="ProductInterface4" />
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
