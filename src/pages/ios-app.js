import * as React from "react";
import Template from "../components/template";
import CardList from "../components/cardList";
import finalApp from "../assets/finalApp.png";

const IosAppPage = () => {
  return (
    <Template pageTitle="iOS app" title="MUX | iOS app">
      <div className="grid grid-cols-1 gap-14">
        <CardList>
          <h2>My role</h2>
          <ul>
            <li class="default">Lead the UX for the app design</li>
            <li class="default">
              Project managed the swift developers, graphic designers, and
              content curated for the app
            </li>
            <li class="default">
              Conducted QA testing with our QA engineers for the app
            </li>
            <li class="default">
              Work alongside engineering during delivery phase
            </li>
          </ul>
        </CardList>
        <div>
          <h2>Scope</h2>
          <h3>Problem statment</h3>
          <p>
            To keep up with the growing user base, the software needed to adapt
            for more accessible use. Test takers could only access the software
            through a computer or laptop. This meant all students needed to have
            access to a computer which isn’t always the case.{" "}
          </p>
          <h3>Goal</h3>
          <p></p>
          <h3>Resources</h3>
          <ul>
            <li class="default">
              Tools: Figma, TestFlight, Apple Developer, Azure DevOps
            </li>
            <li class="default">
              Design system: Integrating Proctorio’s design styles with iOS
              native UI kits and Human Interface Guidelines
            </li>
          </ul>
        </div>
        <div>
          <h2>Outcome</h2>
          <p>
            A polished iOS / iPadOS app combining our design system principles
            as well as Human Interface Guidelines and SwiftUI.
          </p>
          <img class="shadow-none" src={finalApp} alt="final app design"></img>
        </div>
      </div>
    </Template>
  );
};
export default IosAppPage;
