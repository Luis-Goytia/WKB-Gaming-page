import React from "react";
import Styles from "./Workflow.module.css";
export const Workflow = () => {
  return (
    <div>
      <div className={Styles.subtitle}>
        <h5>1 - Planning</h5>
      </div>
      <div className={Styles.text8}>
        <p>
          The true power of digital transformation lies in the advantages that
          it can deliver to businesses. However, to implement digital
          transformation correctly, you have to begin by evaluating the present
          scenario, asking tough questions, and planning the route to digital
          transformation accordingly
        </p>
      </div>
<br />
      <div>
        <table>
          <tr>
            <td>
              <h5>Current State</h5>
              <p>
                Before digital transformation begins, you should evaluate your
                company’s strengths and weaknesses to identify opportunities.
              </p>
            </td>
            <td>
              <h5>Industry Changes</h5>
              <p>
                Identify market and industry trends to understand how they
                impact your digital transformation efforts and prepare
                accordingly.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Achievable goals</h5>
              <p>
                Align your digital transformation goals with those of your
                organization and consider the aspects of budget, duration, and
                scope.
              </p>
            </td>
            <td>
              <h5>Customer behavior</h5>
              <p>
                Analyze how digital transformation provides a unique customer
                experience in the light of their rapidly changing behavior.
              </p>
            </td>
          </tr>
        </table>
        <br />
      </div>

      <div className={Styles.subtitle}>
        <h5>2 – Implementation</h5>
      </div>
      <br />
      <div className={Styles.text8}>
        <p>
          Digital transformation is like redesigning an airplane with many
          complex parts. It’s even more difficult because this airplane has to
          remain in flight while you rebuild it. Implementing digital
          transformation correctly involves multiple steps:
        </p>
      </div>
<br />
      <div>
        <table>
          <tr>
            <td>
              <h5>Strategy</h5>
              <p>
                Before digital transformation begins, you should evaluate your
                company’s strengths and weaknesses to identify opportunities.
              </p>
            </td>
            <td>
              <h5>First step</h5>
              <p>
                Identify predictable, repeatable processes that you can
                automate. These processes will serve as your pilot project.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Adoption</h5>
              <p>
                Ensure everyone is on board. This requires clear communication
                of potential impact with stakeholders and employees.
              </p>
            </td>
            <td>
              <h5>Innovation</h5>
              <p>
                Empower business users to get involved in the problem solving
                process for improved business context and collaboration.
              </p>
            </td>
          </tr>
        </table>
      </div>
<br />
      <div className={Styles.subtitle}>
        <h5>3 – Acceleration</h5>
      </div>
      <div className={Styles.text8}>
        <p>
          For digital transformation to be successful, you have to constantly
          experiment, adapt and navigate challenges or risk the failure of your
          digital transformation efforts. Accelerating digital transformation
          typically involves the following:
        </p>
      </div>
      <br />

      <div>
        <table>
          <tr>
            <td>
              <h5>Solving multiple problems</h5>
              <p>
                For digital transformation to work, you have to rapidly identify
                inefficiencies and areas for improvement.
              </p>
            </td>
            <td>
              <h5>Legacy Modernization</h5>
              <p>
                Pinpoint internal tools and systems that are not delivering
                optimally and modernize them for better efficiency.
              </p>
            </td>
          </tr>
          <tr>
            <div >
              
              <h5>Preparing people</h5>
              <p>
                People are the most important part of the journey. Keep everyone
                informed and address issues as they arise.
              </p>
            </div>
          </tr>
        </table>
      </div>

      <div className={Styles.subtitle}>
        <h5>4 - Measurement</h5>
      </div>
      <div className={Styles.text8}>
        <p>
          Tracking and measuring the success of your digital transformation
          initiative is quite important. However, this isn’t merely about
          checking all the right boxes. The success of digital transformation
          should be measured based on the objectives you have set at the onset
          of your strategy.
        </p>
      </div>
      <br />

      <div>
        <table>
          <tr>
            <td>
              <h5>Employee productivity</h5>
              <p>
                New technology can reduce the time spent on certain tasks or
                help employees do more within the same time.
              </p>
            </td>
            <td>
              <h5>Adoption and performance</h5>
              <p>
                Digital adoption is a measure of how well employees are adapting
                to the use of new technology.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Adoption and performance</h5>
              <p>
                Understand how new digital technology is changing how your
                customers relate and perceive your business.
              </p>
            </td>
            <td>
              <h5>Digital ROI</h5>
              <p>
                For every new component you add to your digital technology
                suite, you should know how much ROI it brings to your business.
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
