import React from "react";
import Styles from "./Workflow.module.css";
export const Workflow = () => {
  return (
    <div>
      <div>
        <div className={Styles.subtitle}>
          <h5>1 – Sketches</h5>
        </div>
        <br />
        <div>
          <p>
            This is the quickest, lowest cost and lowest commitment way to kick
            off your designs. It gets the high-level, top of mind ideas out of
            your head and onto your paper or screen. Generally, these are
            roughly captured ideas and if they look pretty bad then you're
            probably on the right track. It's something you should be able to do
            in a very short amount of time on paper, a whiteboard or using a
            wireframing app.
          </p>
        </div>
      </div>
      <br />
      <div>
        <div className={Styles.subtitle}>
          <h5>2 – Wireframes or Gray boxing</h5>
        </div>
        <div>
          <p>
            Wireframes are created to show what things look like before visual
            design principles have been applied. It's where you can start to see
            the layout and elements taking shape.
          </p>
        </div>
      </div>
      <br />
      <div>
        <div className={Styles.subtitle}>
          <h5>What's on it</h5>
        </div>
        <br />
        <div className={Styles.frame}>
          <p> &middot; Filler content</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p> &middot; Lorem ipsum or actual text which I highly recommend</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p> &middot; Placeholder images or stock images</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
            &middot; Usually can be done in your design software using an
            existing wireframing UI kit or done from scratch
          </p>
          <br />
        </div>
      </div>

      <div>
        <div className={Styles.subtitle}>
          <h5>Purpose</h5>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>&middot; Visualize the general layout</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>&middot; Establish correct proportions</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
            &middot; Build trust with stakeholders and help them see the idea
            more fleshed out
          </p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
            &middot; Fast and cheap way to create initial ideas or to
            low-fidelity prototype
          </p>
        </div>
        <br />
      </div>
      <br />
      <div className={Styles.subtitle}>
        <h5>3 – Component design</h5>
      </div>
      <br />
      <div>
        <p>
          Dynamic user interfaces (unlike static website landing pages or
          marketing sites) require you to think through states and conditionals.
          It also requires you to be consistent, apply good usability principles
          and decide the best way to layout and organize and disclose
          information and actions. This is where thinking in components and
          atomic elements and database views can really help.
        </p>
      </div>
      <br />

      <div className={Styles.subtitle}>
        <h5>4 – User Flows and Task flows</h5>
      </div>
      <br />
      <div>
        <p>
          What happens when they click on this or if they forget to add in some
          information here. This is about understanding the user's mental models
          and your system's model and the orchestration of the pathways and
          responses that your interface will provide.
        </p>
      </div>
      <br />
      <br />
      <div>
        <div>
          <div className={Styles.subtitle}>
            <h5>What's on it</h5>
          </div>
          <br />
          <div className={Styles.frame3}>
            <p>&middot; Wireframes</p>
          </div>
          <br />
          <div className={Styles.frame3}>
            <p>&middot; Flow charts</p>
          </div>
          <br />
          <div className={Styles.frame3}>
            <p>&middot; Wireflows</p>
          </div>
          <br />
          <div className={Styles.frame3}>
            <p>&middot; Arrows</p>
          </div>
          <br />
          <div className={Styles.frame3}>
            <p>&middot; Conditionals</p>
          </div>
          <br />
        </div>
        <br />
      </div>

      <div>
        <div>
          <div className={Styles.subtitle}>
            <h5>Purpose</h5>
          </div>
          <div className={Styles.frame}>
            <p>&middot; To show navigation routes</p>
          </div>
          <br />
          <div className={Styles.frame}>
            <p>&middot; To check for missing states and information</p>
          </div>
          <br />
          <div className={Styles.frame}>
            <p>
              &middot; To visualize entry, exist and decision points for your
              user/customer journey5 – Prototyping process
            </p>
          </div>
          <br />
        </div>
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h5>5 - High fidelity designs</h5>
        </div>
        <br />
        <div className={Styles.subtitle}>
          <h5>Purpose</h5>
        </div>
        <br />
        <div className={Styles.frame2}>
          <p>&middot; Create pixel perfection</p>
        </div>
        <br />
        <div className={Styles.frame2}>
          <p>&middot; Create visual design consistency</p>
        </div>
        <br />
        <div className={Styles.frame2}>
          <p>&middot; Add a sense of your brand</p>
        </div>
        <br />
        <div className={Styles.frame2}>
          <p>&middot; Select final design assets</p>
        </div>
        <br />
        <div className={Styles.frame2}>
          <p>&middot; Get final approval from stakeholders</p>
        </div>
        <br />
      </div>

      <div>
        <div className={Styles.subtitle}>
          <h5>6 – Prototype</h5>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
            &middot; This ties everything together and shows how the app is
            expected to look and behave.
          </p>
          <br />
        </div>
        <div className={Styles.subtitle}>
          <h5>What's on it</h5>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>&middot; All screens hi-fidelity</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
            &middot; Target points to mimic what it will be like when the user
            interacts with the real thing
          </p>
        </div>
        <br />
        <div>
          <h5></h5>
        </div>
        <div className={Styles.frame}>
          <p>
            &middot; Links together all of the screen and flows in a simulated
            environment
          </p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
            &middot; Ensures that everything looks good, work well and flows as
            intended before it goes to production.
          </p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
            &middot; This can be considered the pre-code or no-code version of
            your product.
          </p>
        </div>
        <br />
      </div>
    </div>
  );
};
