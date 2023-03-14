import React from "react";
import Styles from './Problem.module.css'
export const Problem = () => {
  return (
    <div>
      <div className={Styles.description}>
        <p>
          WKB’s dedicated development teams build custom web and mobile apps
          with a focus on speed to market. We are able to deliver your digital
          product MVP in as little as 2-6 month employing the lean startup
          approach and agile software development.
        </p>
      </div>
      <div className={Styles.description}>
        <p>
          We know that you have a big idea. Now we should make a digital product
          high-quality experience with functional UX and beautiful UI, not to
          mention a flawless and secure backend engine behind it.
        </p>
      </div>
    </div>
  );
};
