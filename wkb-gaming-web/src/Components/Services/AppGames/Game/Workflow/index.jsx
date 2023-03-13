import React from "react";
import Styles from './Workflow.module.css'
export const Workflow = () => {
  return (
    <div>
      <div>
        <div  className={Styles.subtitle}>
          <h5>1 – Pre-production</h5>
        </div>
        <div className={Styles.text1}>
          <p>
            It is vital to start the computer game development process by
            collecting information about a future product, such as technical
            requirements. Managers and product owners work to define the goals
            and business of the project and map out the core concept behind it.
          </p>
        </div>
        <div className={Styles.text2}>
          <p>
            Market and competitor analysis. It is necessary to determine what is
            now at peak popularity in the gaming industry and brings the most
            significant profit.
          </p>
        </div>
        <div className={Styles.text2}>
          <p>
            The target audience. It is important to determine who will be
            interested in your product to advance the game’s development
            according to their preferences.
          </p>
        </div>
        <div className={Styles.text3}>
          <p>
            Choosing a platform. The choice of a platform is usually based on
            the popularity of use, as well as the company’s coding capabilities.
          </p>
        </div>
        <div className={Styles.text2}>
          <p>
            Allocation of resources. It is necessary to establish the number of
            required specialists, equipment, as well as the video game
            development process timeline that will be required for the execution
            of a project.
          </p>
        </div>
        <div className={Styles.text4}>
          <p>
            Concept art. Concept artists design characters, environments, props,
            and other game assets.
          </p>
        </div>
        <div className={Styles.text5}>
          <p>
            Type of monetization. Make money from ads, in-game purchases, or
            sell a product at a fixed cost?
          </p>
        </div>
        <div className={Styles.text6}>
          <p>
            Risk analysis. It involves calculating all possible risks in advance
            and determining the methods of damage mitigation.
          </p>
        </div>
        <div className={Styles.text7}>
          <p>
            Marketing strategy. It is necessary to think about how to make the
            game appeal to as many users as possible.Depending on needs, the
            project goals might range from building a reasonable minimum viable
            product to building out a full multi-faceted mobile platform
            solution.
          </p>
        </div>
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h5>2 – Pre-production & Production</h5>
        </div>
        <div className={Styles.text3}>
          <p>
            The production stage is the longest and most labor-intensive phase
            of a video game production pipeline, divided into several internal
            stages.
          </p>
        </div>
        
        <div className={Styles.text7}>
          <p>
            Prototype characters, environments, interfaces, control schemes, and
            other in-game elements to see how they look, feel, and interact with
            one another. This is essentially the “let’s see what we’re working
            with” moment before moving onto the bread-and-butter of development
            – production.
          </p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
          &middot; Character models are designed, rendered, and iterated on to look
            exactly how they should in the story.
          </p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
          &middot; Audio design works tirelessly to ensure every time your character
            steps onto sand, gravel, or cement, it sounds authentic.
          </p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
          &middot; Level designers craft environments that are dynamic, immersive, and
            suitable for many types of playstyles.
          </p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
          &middot; Voice actors read large stacks of scripts, doing take after take to
            get the right emotion, timing, and tone.
          </p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
          &middot; Developers write thousands-of-lines-of-source code to bring each
            piece of in-game content to life.
          </p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>
          &middot; Project leads establish milestones and sprint schedules, ensuring
            each department and its team members are held accountable. This is
            especially important if a publisher regularly checks in for status
            updates.
          </p>
        </div>
      </div>
      <br />
      <div>
        <div className={Styles.subtitle}>
          <h5>3 – Testing</h5>
        </div>
        <div className={Styles.text8}>
          <p>
            Every feature and mechanic in the game needs to be tested for
            quality control. A game that hasn’t been thoroughly tested is a game
            that’s not even ready for an Alpha release. Here are some things a
            playtester may point out during this stage:
          </p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>Are there buggy areas or levels?</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>Is everything rendering on the screen?</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>Can I walk through this wall or a locked environment?</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>Are there features I can use to exploit the game?</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>Does my character get permanently stuck in this spot?</p>
        </div>
        <br />
        <div className={Styles.frame}>
          <p>Is the character dialogue stale and boring?</p>
        </div>
        <br />
      </div>
      <div>
        <div className={Styles.subtitle}>
          <h5 >4 – Launch</h5>
        </div >
        <div className={Styles.text8}>
          <p>
            The product launch is the final game development phase, which
            everyone eagerly awaits. But launch is not the end of the story.
            Usually, there are enough errors and flaws even when a game is
            ready, so in parallel with the launch, the game development team
            continues bringing more details and improvements to the game. At the
            same time, testers collect the first feedback from real users for
            developers to make important changes.
          </p>
        </div>
      </div>
      <div >
        <div className={Styles.subtitle}>
          <h5>5 – Post-production</h5>
        </div>
        <div className={Styles.text7}>
          <p>
            After a game is launched to the market, fixes and improvements
            require constant monitoring to double-check the level of stability
            and performance. Ideally, studios will regularly release updates to
            meet the technical requirements of platforms, which are also
            updated.
          </p>
        </div>
        <div className={Styles.text1}>
          <p>
            Also, many companies update in-game content and sometimes add
            exciting new mechanics to keep users engaged in a game. All this
            requires maintaining quality through constant maintenance and
            regular testing of new versions of a game.
          </p>
        </div>
      </div>
    </div>
  );
};
