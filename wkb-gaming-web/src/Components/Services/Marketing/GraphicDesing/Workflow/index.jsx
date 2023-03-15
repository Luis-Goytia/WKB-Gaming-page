import React from 'react';
import Styles from './Workflow.module.css';
export const Workflow = () => {
  return (
    <div>
      <div className={Styles.subtitle}>
        <h5>1 - Research </h5>
      </div>
      <div className={Styles.text1}>
        <p>
          We initially start with researching the idea and brainstorming which
          give us a clear view what we need to produce.
        </p>
      </div>
      <div className={Styles.subtitle}>
        <h5>2 – Planning</h5>
      </div>
      <div className={Styles.text1}>
        <p>
          We do a planning to achieve the client imaginative output and do
          conceptual development and rough sketches
        </p>
      </div>
      <div className={Styles.subtitle}>
        <h5>3 – Creativity</h5>
      </div>
      <div className={Styles.text1}>
        <p>
          Our creative minds produce completely fresh and original ideas for
          every stuff we design and it inspire us for keep going.
        </p>
      </div>
      <div className={Styles.subtitle}>
        <h5>4 – Production</h5>
      </div>
      <div className={Styles.text1}>
        <p>
          We produce different concepts for a single job and present the best
          concept to client and do corrections until perfections.
        </p>
      </div>
    </div>
  );
};
