import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BsGraphUpArrow } from 'react-icons/bs';
import { BiDna } from 'react-icons/bi';

import Styles from './KeyBenefits.module.css';
export const KeyBenefits = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card1}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <AiOutlineArrowUp />
          </div>
          <div className={Styles.title}>
            <h5>Increased Revenue</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Businesses all have the common goal of drawing in as much revenue as
            possible. If you haven’t included social media as part of your
            marketing initiatives, you may be missing out on an additional
            stream of income. This ties in with brand awareness, and with more
            people finding out about your business, the more potential you have
            at growing your customer base.
          </p>
        </div>
      </div>
      <div className={Styles.card2}>
        <div className={Styles.header}>
          <div className={Styles.icon2}>
            <BiDna />
          </div>
          <div className={Styles.title}>
            <h5>Brand awareness</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            Having a presence on social media makes it easier for both existing
            and potential customers to find and connect with your brand. With
            the sheer volume of people using social media today, your business
            has an opportunity to reach a significant number of new eyes and
            audiences. Social platforms are also a great place to tell your
            brand’s story and help people get a better feel for what your
            business is all about.
          </p>
        </div>
      </div>
      <div className={Styles.card3}>
        <div className={Styles.header}>
          <div className={Styles.icon1}>
            <BsGraphUpArrow />
          </div>
          <div className={Styles.title}>
            <h5>Current Trends</h5>
          </div>
        </div>
        <div className={Styles.description}>
          <p>
            The one thing that is constant in both the real and digital world is
            that it is always changing. New trends, products, brands, and
            services are being introduced on a daily basis, which can often be
            hard to keep up with. In such a rapidly changing world, there needs
            to be an efficient way in which customers can stay on top of this
            change. Content on social media is a great way for consumers to
            access engaging and relevant information that helps them stay
            up-to-date
          </p>
        </div>
      </div>
    </div>
  );
};
