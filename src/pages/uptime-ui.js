import * as React from "react";
import Template from "../components/Template";
import CardList from "../components/CardList";
import uptimeOld from "../assets/uptimeOld.png";
import uptimeNew from "../assets/uptimeNew.png";

const UptimePage = () => {
  return (
    <Template pageTitle="Uptime UI" Title="Mariah Tao">
      <div className="space-y-14">
        <CardList>
          <h2>My role</h2>
          <ul className="mb-0">
            <li className="default">Design the external uptime status page</li>
            <li className="default">Work alongside engineering during delivery phase</li>
            <li className="default">Document all use cases, interactions, behaviors, and flows</li>
            <li className="default">Product manage and mentor the product team of quarterly interns</li>
          </ul>
        </CardList>
        <div>
            <h2>Scope</h2>
            <h3>Problem statement</h3>
            <p>The existing uptime status page had outdated and archaic design patterns and provided little context or insight into downtime or degradation.</p>
            <img src={uptimeOld} alt="old uptime"></img>
            <h3 className="pt-6">Goal</h3>
            <p>Improve the external uptime status page for our growing users to include real time information and provide an ideal user experience.</p>
        </div>
        <div>
            <h2>Outcome</h2>
            <p>My work resulted in a modern UI with consistent design patterns, usability standards, smooth interactions, and necessary content to understand the health of the system.</p>
            <img className="shadow-none pt-2" src={uptimeNew} alt="new uptime solution"></img>
        </div>
      </div>
    </Template>
  );
};
export default UptimePage;
