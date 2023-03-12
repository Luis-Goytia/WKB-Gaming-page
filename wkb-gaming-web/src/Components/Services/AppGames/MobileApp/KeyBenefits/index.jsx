import React from "react";
import { BsPersonBoundingBox } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
export const KeyBenefits = () => {
  return (
    <div>
      <div className={Styles.card}>
        <div>
          <div className={Styles.icon}>
            <BsPersonBoundingBox />
          </div>
          <div className={Styles.title}>
            <h5>Customer Acquisition & Retention</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            An attractive, functional and easy to use UX/UI will amaze your
            users and solve their problems effectively. These positive
            experiences will not only drive people to your product, but it will
            also keep them using it.
          </p>
        </div>
      </div>
      <div className={Styles.card}>
        <div>
          <div className={Styles.icon}>
            <RiMoneyDollarCircleLine />
          </div>
          <div className={Styles.title}>
            <h5>Reduce Costs</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            A well-designed product will require less training, documentation
            and development, both now and in the future. This will allow your
            team to focus on developing the business instead of correcting false
            assumptions or confusing navigation that gets the user stuck.
          </p>
        </div>
      </div>
    </div>
  );
};
