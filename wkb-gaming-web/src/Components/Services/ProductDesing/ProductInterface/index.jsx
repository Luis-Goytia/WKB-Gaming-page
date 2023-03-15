import React from "react";
import ProductInterface1 from "../../../../assets/Services/img/ProductDesing/ProductInterface/Product Interface Design & Prototype-min.png";
import ProductInterface2 from "../../../../assets/Services/img/ProductDesing/ProductInterface/Product Interface Design & Prototype-1-min.png";
import ProductInterface3 from "../../../../assets/Services/img/ProductDesing/ProductInterface/Product Interface Design & Prototype-2-min.png";
import ProductInterface4 from "../../../../assets/Services/img/ProductDesing/ProductInterface/Product Interface Design & Prototype-3-min.png";
import { Workflow } from "./Workflow";
import { KeyBenefits } from "./KeyBenefits";
import { Problem } from "./Problem";
import Styles from "./ProductInterface.module.css";
export const ProductInterface = () => {
  return (
    <div className={Styles.component}>
      <div className={Styles.subtitle}>
        <h1>Product Interface Design & Prototype</h1>
      </div>
      <div className={Styles.description}>
        <p>
          We help our clients not only define strategies – but also bring to
          market products at scale.
        </p>
        <p>
          Our UI design experts lead the way in interface design development,
          creating websites and applications that are visually appealing,
          seamless, and intuitive to use, putting users first.
        </p>
      </div>
      <br />
      <div className={Styles.list_img}>
        <div className={Styles.div1}>
          <img src={ProductInterface1} alt="ProductInterface1" />
        </div>
        <div className={Styles.div2}>
          <img src={ProductInterface2} alt="ProductInterface2" />
        </div>
        <div className={Styles.div3}>
          <img src={ProductInterface3} alt="ProductInterface3" />
        </div>
        <div className={Styles.div4}>
          <img src={ProductInterface4} alt="ProductInterface4" />
        </div>
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h2>Problem</h2>
        </div>
      </div>
      <Problem/>
      <div>
        <div className={Styles.subtitle}>
          <h2>How is our workflow</h2>
        </div>
        <Workflow />
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h2>Key Benefits</h2>
        </div>
        <br />
        <KeyBenefits />
      </div>
    </div>
  );
};
