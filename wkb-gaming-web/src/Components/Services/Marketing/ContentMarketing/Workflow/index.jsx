import React from 'react';
import Styles from './Workflow.module.css';
export const Workflow = () => {
  return (
    <div>
      <div className={Styles.subtitle}>
        <h5>1. Research and Planning Stage</h5>
      </div>
      <div className={Styles.text1}>
        <p>
          In this stage, we find out who your target audience is and how we can
          attract their attention and convert them.
        </p>
        <p>
          We can conduct customer research by: <br />
          <br />
          Analyzing how customers behave and interact with the website. <br />
          <br />
          Conducting polls and surveys. <br />
          <br />
          Analyzing the audience on social media platforms. <br />
          <br />
          Checking customers’ feedback, suggestions, and complaints.
        </p>
      </div>
      <div className={Styles.subtitle}>
        <h5>2. Content Creation</h5>
      </div>
      <div className={Styles.text1}>
        <p>
          The essence of this stage is to create content that gives value to
          your audience. You can achieve it by combining unique ideas and
          valuable topics. We can also add creative themes to the whole setup.
          It is important to have specific and fixed goals to achieve from this
          strategy. Without goals, planning cannot be successful.
        </p>
      </div>
      <div className={Styles.subtitle}>
        <h5>3. Scheduling and Publishing</h5>
      </div>
      <div className={Styles.text1}>
        <p>
          <br />
          At this stage, we can publish the content on various platforms. But,
          first, we need to:
          <br />
          <br />
          Find the channels where we will publish the content.
          <br />
          <br />
          Distribute and promote content according to the target audience.
          <br />
          <br />
          Leverage a content scheduling tool to auto-publish content.
        </p>
      </div>
      <div className={Styles.subtitle}>
        <h5>4. Distribution and Promotion</h5>
      </div>
      <div className={Styles.text1}>
        <p>
          Publishing content alone is not enough; promoting it too, is crucial.
          We can promote content on social media, content syndication sites,
          forums, or through guest posting. Also, we can optimize the blog post
          for search engines to generate more traffic.
          <br />
          We create a calendar for content management system at work.
        </p>
      </div>
      <div className={Styles.subtitle}>
        <h5>5. Analyze and Optimize</h5>
      </div>
      <div className={Styles.text1}>
        <p>
          The best way to complete a content process is by analyzing the
          performance. We can also identify areas that need improvement and
          revise the plan. These are important ways of improving the content
          marketing process and making it more effective.
        </p>
      </div>
    </div>
  );
};
