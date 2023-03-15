import React from "react";
import { BsBinocularsFill, BsPlugFill } from "react-icons/bs";
import { GiSiren } from "react-icons/gi";
import { TbPlant2,TbShieldCheckered } from "react-icons/tb";
import Styles from "./KeyBenefits.module.css";
export const KeyBenefits = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card1}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <GiSiren />
          </div>
          <div className={Styles.title}>
            <h5>Avoiding Painful Mistakes</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            It is no hidden fact that most startups fail, and many of them do so
            because they make costly errors in the early stages. The most
            valuable benefit of hiring a startup is that it can help you avoid
            the painful mistakes made by others. Most startup consultants have
            witnessed founders and other key employees make the same common
            mistakes time and time again. Avoiding some of these mistakes can
            help you scale faster and ultimately save your startup from failure.
          </p>
        </div>
      </div>
      <div className={Styles.card2}>
        <div className={Styles.header}>
          <div className={Styles.icon2}>
            <BsPlugFill />
          </div>
          <div className={Styles.title}>
            <h5>Access to Connections & Resources</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Many consultants have a broad network of connections and access to
            resources from past roles, clients and projects. Personally, I
            happily share my network and resources with all of my clients, and
            you will find most other consultants will do the same. Accessing a
            consultant’s trusted connections and resources is a great way to
            gain new customers, increase your knowledge and save money.
          </p>
        </div>
      </div>
      <div className={Styles.card3}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <BsBinocularsFill />
          </div>
          <div className={Styles.title}>
            <h5>Getting an Objective Birds-Eye View</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            As the founder or employee of a startup, you fast become blinkered
            and unable to spot the flaws in your startup. A consultant can offer
            a refreshingly honest, objective and valuable insight into what
            outsiders see but are not always brave enough to say. Personally, I
            believe it is my duty to be 100% transparent and honest and tell you
            what you might not necessarily want to hear. Sometimes this is hard
            to swallow, but not as painful as finding out months down the line
            when the damage has been done.
          </p>
        </div>
      </div>
      <div className={Styles.card4}>
        <div className={Styles.header}>
          <div className={Styles.icon2}>
            <TbPlant2 />
          </div>
          <div className={Styles.title}>
            <h5>Saving Time & Reducing Stress</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            As a founder or entrepreneur, your list of to-do’s is never ending,
            often causing stress and long working hours. A startup consultant
            can help take many tasks off your hands, freeing you up to spend
            time on other crucial tasks. I have advanced experience coaching
            executives, where I often work with founders on time management,
            prioritisation and reducing stress. As the captain of the ship, your
            well-being is crucial to the success of your startup.
          </p>
        </div>
      </div>
      <div className={Styles.card5}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <TbShieldCheckered />
          </div>
          <div className={Styles.title}>
            <h5>Data Protection</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Our startup IT consulting services prioritize data security and
            privacy, which is why we use encryption protocols to safeguard our
            correspondence with your small startup business. When you work with
            EPAM Business Anywhere, your data remains safe from unauthorized
            third-party access.
          </p>
        </div>
      </div>
    </div>
  );
};
