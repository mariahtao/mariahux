import * as React from "react";
import Template from "../components/template";
import CardList from "../components/cardList";
import rds from "../assets/rds.png";

const DSManagerPage = () => {
  return (
    <Template
      pageTitle="Roos Design System"
      Title="Mariah Tao"
    >
      <div className="space-y-14">
        <CardList>
          <h2>My role</h2>
          <ul className="mb-0">
            <li className="default">
              Manage, maintain, and scale the design system and components
            </li>
            <li className="default">Design all UI components</li>
            <li className="default">Create all styles and css variables</li>
            <li className="default"> Document all use and setup</li>
          </ul>
        </CardList>
        <div>
          <h2>Scope</h2>
          <h3>Problem statement</h3>
          <p>
            The software needed to scale aggressively to keep up with the
            growing user base. There wasn't a cohesive UI and the design system
            was one page in Figma with only a few basic components and only one
            product out of many used the design system. There were major pain
            points in the software from poor UI to usability issues.
          </p>
          <h3>Goal</h3>
          <p>
            Scale the design system to support all the products the company
            offers and create a great experience for the designer and developers
            creating the products.
          </p>
          <h3>Resources</h3>
          <ul>
            <li className="default">
              I decided to use <a href="https://www.lightningdesignsystem.com/" className="default">Lightning Design System</a> by Salesforce as
              inspiration for scaling this design system
            </li>
            <li className="default">Figma (design environment)</li>
            <li className="default">VS code, Storybook (dev environment)</li>
            <li className="default">
              An in-house frontend framework with vanilla JS used to create web
              components
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h2>Best practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardList>
              <p className="mb-2 font-semibold text-aqua-500">Accessibility</p>
              <p className="mb-0">I implemented accessibility standards (WCAG AA) into the design system to ensure all of our products followed accessibility standards from its core.</p>
            </CardList>
            <CardList>
              <p className="mb-2 font-semibold text-aqua-500">Variants</p>
              <p className="mb-0">In Figma, I utilized the variants feature to help scale and build components. This helped to define the use cases for different components and speed up prototyping when designing.</p>
            </CardList>
            <CardList>
              <p className="mb-2 font-semibold text-aqua-500">Documentation</p>
              <p className="mb-0">I created documentation around use cases, example usage,transitions, interactions, box model, states, validation, booleans, and expected behavior.</p>
            </CardList>
            <CardList>
              <p className="mb-2 font-semibold text-aqua-500">8 point grid system</p>
              <p className="mb-0">I used an 8 point grid system when creating components and styles to ensure consistency around sizing and spacing.</p>
            </CardList>
          </div>
        </div>
        <div>
          <h2>Styles</h2>
          <h3>Color</h3>
          <p>
            Created standard system colors and decorative colors using radial
            gradients.
          </p>
          <h3>Text</h3>
          <p>
            Set a base font size as Body/Regular and created other body and
            heading sizes around the base multiplied by rems.
          </p>
          <h3>Shadows</h3>
          <p>
            Created shadows for various use cases such as dark, light, focus,
            and destruct states.
          </p>
          <h3>Style sheet</h3>
          <p>
            Create CSS variables from the defined styles to use in our frontend
            framework.
          </p>
        </div>
        <img className="shadow-none" src={rds} alt="rds"></img>
        <div>
          <h2>Outcome</h2>
          <ul>
            <li className="default">
              I took the design system from 1 page to 41 pages to accommodate
              all products and features
            </li>
            <li className="default">
              The design system now includes all UI components for every product
              external and internal, design tokens, and hundreds of frames of
              documentation (refactoring, schemas, dependencies)
            </li>
            <li className="default">
              Previously, only 3 people in the company looked at Storybook to
              view the design system including myself
            </li>
            <li className="default">
              Currently, over 50% of the company looks at Storybook to not only
              view the design system, but also demo the product updates and find
              documentation
            </li>
          </ul>
        </div>
        <div>
          <h2>What I learned</h2>
          <p>
            Design systems benefit the team building the product just as much as
            the users using the product. A good design system functions as the
            source of truth for the engineering and UX of the product. It
            improves the designer and developer experience as well as
            on-boarding for new team members.
          </p>
          <p>
            Consistency and standards is included in Jakob Nielsen’s 10 general
            principles for interaction design. A design system is one way to
            maintain consistency and improve the user experience.
          </p>
          <p>
            Most importantly, I learned to always have the data and research to
            effectively advocate for UX best practices.
          </p>
        </div>
      </div>
    </Template>
  );
};
export default DSManagerPage;
