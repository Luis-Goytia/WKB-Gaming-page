import React from "react";
import Styles from "./Card.module.css";

export const Card = ({ icon, title, description }) => {
  return (
    <div className={Styles.card}>
      <div>
        <div className={Styles.icon}>
          <img src={icon} alt="icon" />
        </div>
        <div className={Styles.title}>
          <h5>{title}</h5>
        </div>
      </div>
      <div className={Styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
};
