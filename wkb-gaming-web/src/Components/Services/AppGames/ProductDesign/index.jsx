import React from "react";
import Product1 from '../../../../assets/Services/img/AppGames/ProductDesign/Product Design Factory-min.png'
import Product2 from '../../../../assets/Services/img/AppGames/ProductDesign/Product Design Factory-1-min.png'
import Product3 from '../../../../assets/Services/img/AppGames/ProductDesign/Product Design Factory-2-min.png'
import Product4 from '../../../../assets/Services/img/AppGames/ProductDesign/Product Design Factory-3-min.png'
export const ProductDesing = () => {
  return (
    <div>
      <div>
        <h1>Product Design/Factory</h1>
      </div>
      <div>
        <p>
          We help our clients not only define strategies – but also bring to
          market products at scale.
        </p>
        <p>
          WKB’s dedicated development teams build custom web and mobile apps
          with a focus on speed to market. We are able to deliver your digital
          product MVP in as little as 2-6 month employing the lean startup
          approach and agile software development.
        </p>
      </div>
      <div>
        <div><img src={Product1} alt="Product1" /></div>
        <div><img src={Product2} alt="Product2" /></div>
        <div><img src={Product3} alt="Product3" /></div>
        <div><img src={Product4} alt="Product4" /></div>
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
