import React from "react";
import { Table } from "./Table";
import LinearWeb from "../../../../../assets/Services/img/AppGames/WebEcomerce/LinearWeb.svg";
import Hierarchica from "../../../../../assets/Services/img/AppGames/WebEcomerce/Hierarchica.svg";
export const Workflow = () => {
  return (
    <div>
      <div>
        <div>
          <h5>1 - Web site Planning</h5>
        </div>
        <div>
          <p>
            Involves the identification of the Web site goals or purpose. The
            question to ask is: What is the purpose of this Web site?
          </p>
        </div>
        <div>
          <p>
            In addition to understanding the Web site purpose, you should also
            ask: Who will use the Website? or knowing the target audience in
            terms of: age, gender, computer literacy, etc.
          </p>
        </div>
        <div>
          <p>
            Understanding the computing environment will allow the designer to
            know what type of Technologies to use.
          </p>
        </div>
        <div>
          <p>
            The last question is to ask who will provide the information
            included in the Web site.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h5>2 - Web Site Analysis</h5>
        </div>
        <div>
          <p>
            During this phase, the Web designer needs to make decisions about
            the Web site content and functionality.
          </p>
        </div>
        <div>
          <p>
            It includes a detailed analysis of the content of the Website in
            terms information covered, processing required, etc.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h5>3 - Design and Development</h5>
        </div>
        <div>
          <p>
            After, the purpose of the Website has been found and the content has
            been defined, we need to organize the content of the Website. Many
            ways to organize the Website exists. Here are some general pointers:
          </p>
        </div>
        <div>
          <Table />
        </div>
      </div>
      <div>
        <div>
          <h5>4 - Layouts</h5>
        </div>
        <div>
          <p>
            Websites are designed using any of several different types of
            layouts, including linear, hierarchical, and Webbed. Each layout
            links, or connects, the Web pages in a different structure to define
            how users navigate through the site and view the Web pages. You
            should select a layout for your Web site based on how users will
            most easily navigate through the site to complete tasks and view the
            Web site contents.
          </p>
        </div>
        <div>
          <p>
            A linear Web site layout connects Web pages in a straight line. A
            linear Web site layout connects Web pages in a straight line. A
            linear Web is appropriate if the information on the Web pages should
            be read in a specific order.
          </p>
        </div>
        <div>
          <img src={LinearWeb} alt="linearweb" />
        </div>
        <div>
          <p>
            A hierarchical Web site layout connects Web pages in a tree-like
            structure. A hierarchical Web site layout works well on a site with
            a main index or table of contents page that links to all other Web
            pages. With this layout, the main index page would display general
            information and secondary pages include information that is more
            detailed.
          </p>
        </div>
        <div>
          <p>
            A Webbed Web site layout has no set structure. A Webbed Web site
            layout works best on Web sites with information that does not need
            to be read in a specific order and with many navigation options that
            users can select.
          </p>
        </div>
        <div>
          <img src={Hierarchica} alt="hierarchica" />
        </div>
        <div>
          <p>
            Most Web sites are a combination of the linear, hierarchical and
            Webbed layouts. Some of information on the Web site might be
            organized hierarchically from an index page; other information might
            be accessible from all areas of the site while other information
            might be organized linearly to be read in a specific order.
          </p>
        </div>
        <div>
          <p>
            Using a combination of the three layouts is appropriate, if it helps
            users navigate through the site easily.
          </p>
        </div>
        <div>
          <p>
            During the design and development phase, you should also consider
            what types of multimedia could contribute positively to the Web site
            experience.
          </p>
        </div>
        <div>
          <p>Types of multimedia are graphics, photos, video and audio.</p>
        </div>
      </div>
      <div>
        <div>
          <h5>5 - Web site testing</h5>
        </div>
        <div>
          <p>
            A Web site should be tested at various stages of the Web design and
            development. This testing should include a review of page content,
            functionality and usability. Some basic steps to test content and
            functionality are:
          </p>
        </div>
        <div className={Style.frame}>
          <p>
            Reviewing for accurate spelling and proofreading content including
            page titles.
          </p>
        </div>
        <div className={Style.frame}>
          <p>
            Checking links to ensure that they are not broken and are linked
            correctly
          </p>
        </div>
        <div className={Style.frame}>
          <p>
            Checking graphics to confirm they display properly and are linked
            correctly
          </p>
        </div>
        <div className={Style.frame}>
          <p>Testing forms and other interactive page elements</p>
        </div>
        <div className={Style.frame}>
          <p>
            Testing pages to check for speed of loading on lower speed
            connection
          </p>
        </div>
        <div className={Style.frame}>
          <p>Printing each page to check how page s print</p>
        </div>
        <div className={Style.frame}>
          <p>
            Testing each Web in several different browser types and versions to
            verify they display correctly
          </p>
        </div>
      </div>
      <div>
        <div>
          <h5>6 - Site Implementation and Maintenance</h5>
        </div>

        <div>
          <p>
            Once the Web site testing is complete and any required changes have
            been made, the Web site can be implemented. Implementation of a Web
            site means publishing the Web site or uploading it into a Web
            server.
          </p>
        </div>
        <div>
          <p>
            Once, the Web site has been implemented, its maintenance will
            include updating the information content by removing the outdated
            one and putting in the new one.
          </p>
        </div>
        <div>
          <p>
            Periodical checking of the links is also necessary to ensure that
            they are still active.
          </p>
        </div>
        <div>
          <p>
            Finally, Website monitoring is another key aspect of maintenance.
            Usually, the Web servers that host the Web sites keep logs about Web
            site usage.
          </p>
        </div>
      </div>
    </div>
  );
};
