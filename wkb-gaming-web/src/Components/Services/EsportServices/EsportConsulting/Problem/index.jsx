import React from "react";
import Styles from "./Problem.module.css";
export const Problem = () => {
  return (
    <div>
      <div>
        <h2>How may we help your business?</h2>
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h5>Organisers</h5>
        </div>
        <div className={Styles.frame}>
          <p>
            &middot; Advice in relation to government regulations for tournament
            organisation
          </p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
            &middot; Advising on IT acquisitions, general commercial procurement
            and supply chain arrangements
          </p>
        </div>
        <br />
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h5>Government</h5>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>&middot; Esport strategy formulation and implementation</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
            &middot; Supporting the development of esport regulation framework
          </p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>&middot; Urban masterplan design for e-sports infrastructure</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>&middot; Infrastructure financing</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
            &middot; Advising on revenue sharing and events & facilities
            management
          </p>
        </div>
        <br />
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h5>Sponsors and Advertisers</h5>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
            &middot; Supporting the development of a custom made sponsorship
            portfolio
          </p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
            &middot; Advising on advertising, sponsorship and merchandise
            arrangements, including endorsement and appearance agreements
          </p>
        </div>
        <br />
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h5>Media and Broadcasters</h5>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>&middot; Development of esport market entry strategy</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>&middot; Advising on media and broadcasting matters</p>
        </div>
        <br />
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h5>Developers and Publishers</h5>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>&middot; Monetisation strategy and path to profitability</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>&middot; Merger and acquisition / vertical integration advice</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
            &middot; Advising on IP development, assignment, licensing and
            commercialisation arrangements
          </p>
        </div>
        <br />
      </div>
      <br />
    </div>
  );
};
