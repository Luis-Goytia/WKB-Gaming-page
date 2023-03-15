import React from "react";
import { TiEyeOutline } from "react-icons/ti";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosRocket } from "react-icons/io";
import { GiEscalator } from "react-icons/gi";
import Styles from "./KeyBenefits.module.css";

export const KeyBenefits = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card1}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <TiEyeOutline />
          </div>
          <div className={Styles.title}>
            <h5>Increasing brand visibility</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            First off, you have a great chance to use it to improve brand
            visibility to the next level. Namely, establishing sponsorship deals
            enables your name and brand visuals to appear alongside other
            reputable brands and in front of large audiences. Hence, this
            strategy can work miracles for small and local startups struggling
            to gain traction.
          </p>
        </div>
      </div>
      <div className={Styles.card2}>
        <div className={Styles.header}>
          <div className={Styles.icon2}>
            <IoAddCircleOutline />
          </div>
          <div className={Styles.title}>
            <h5>A positive image</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            We all know that public perception can really make or break a
            company. Well, marketing affairs for esports and entertainment is a
            way to build credibility and authority around your business.
            Essentially, you attach your business to worthy causes and
            high-profile affairs in order to nurture positive associations.
          </p>
        </div>
      </div>
      <div className={Styles.card3}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <IoIosRocket />
          </div>
          <div className={Styles.title}>
            <h5>Content & social media marketing</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            What many entrepreneurs overlook is that esports event marketing
            experience provides a lot of material for ramping up a content
            marketing strategy. You can connect with the event holder on social
            media and gain access to the audience by advertising your content.
            Indeed, social media promotion for events is an integral part of the
            success formula along with other sports digital marketing campaigns
            — and a high number of brands already use it for highlighting their
            involvement. Note that specific affairs attract niche audiences or
            member organizations.
          </p>
        </div>
      </div>
      <div className={Styles.card4}>
        <div className={Styles.header}>
          <div className={Styles.icon2}>
            <GiEscalator />
          </div>
          <div className={Styles.title}>
            <h5>Boosting sales</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Increased the sales furthermore, you stand to financially benefit
            right away. Esport events and business summits open the doors to
            winning more customers over and increasing your sales on the spot.
            Take the example of food brands setting up booths and stands at
            esports affairs and feeding hundreds of fans..
          </p>
        </div>
      </div>
    </div>
  );
};
