import * as React from "react";
import Template from "../components/Template";
import CardList from "../components/CardList";
import ios from "../assets/ios.png";

const IosAppPage = () => {
  return (
    <Template pageTitle="iOS app" Title="Mariah Tao">
      <div className="space-y-14">
        <CardList>
          <h2>My role</h2>
          <ul className="mb-0">
            <li className="default">Lead the UX for the app design</li>
            <li className="default">
              Project managed the swift developers, graphic designers, and
              content curated for the app
            </li>
            <li className="default">
              Conducted QA testing with our QA engineers for the app
            </li>
            <li className="default">
              Work alongside engineering during delivery phase
            </li>
          </ul>
        </CardList>
        <div>
          <h2>Scope</h2>
          <h3>Problem statement</h3>
          <p>
            To keep up with the growing user base, the software needed to adapt
            for more accessible use. Test takers could only access the software
            through a computer or laptop. This meant all students needed to have
            access to a computer which isn’t always the case.{" "}
          </p>
          <h3>Resources</h3>
          <ul>
            <li className="default">
              Tools: Figma, TestFlight, Apple Developer, Azure DevOps
            </li>
            <li className="default">
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
          <img className="shadow-none pt-2" src={ios} alt="final app design"></img>
        </div>
      </div>
    </Template>
  );
};
export default IosAppPage;
