import * as React from "react";
import Layout from "../components/layout";
import Template from "../components/template";
import CardList from "../components/cardList";
import component from "../assets/component.png";
import styles from "../assets/styles.png";

const DSManagerPage = () => {
  return (
    <Template
      pageTitle="Design system manager"
      title="MUX | Design system manager"
    >
      <div className="grid grid-cols-1 gap-14">
        <CardList>
          <h2>My role</h2>
          <ul>
            <li class="default">
              Manage, maintain, and scale the design system and components
            </li>
            <li class="default">Design all UI components</li>
            <li class="default">Create all styles and css variables</li>
            <li class="default"> Document all useage and setup</li>
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
            offers and create a great experience for the designer and builders
            creating the products.{" "}
          </p>
          <h3>Resources</h3>
          <ul>
            <li class="default">
              I decided to use Lightning Design System by Salesforce as
              inspiration for scaling this design system
            </li>
            <li class="default">Figma (design environment)</li>
            <li class="default">VS code, Storybook (dev environment)</li>
            <li class="default">
              An in-house frontend framework with vanilla JS used to create web
              components
            </li>
          </ul>
        </div>
        <div>
          <h2>Best practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <CardList>
              <ul class="list-none mb-0">
                <li class="end">Accessibility</li>
                <li class="start">
                  I implemented accessibility standards (WCAG AA) into the
                  design system to ensure all of our products followed
                  accessibility standards from its core.
                </li>
              </ul>
            </CardList>
            <CardList>
              <ul class="list-none mb-0">
                <li class="end">Variants</li>
                <li class="start">
                  In Figma, I utilized the variants feature to help scale and
                  build components. This helped to define the use cases for
                  different components and speed up prototyping when designing.
                </li>
              </ul>
            </CardList>
            <CardList>
              <ul class="list-none mb-0">
                <li class="end">Documentation</li>
                <li class="start">
                  I created documentation around use cases, example usage,
                  transitions, interactions, box model, states, validation,
                  booleans, and expected behavior.
                </li>
              </ul>
            </CardList>
            <CardList>
              <ul class="list-none mb-0">
                <li class="end">8 point grid system</li>
                <li class="start">
                  I used an 8 point grid system when creating components and
                  styles to ensure consistency around sizing and spacing.
                </li>
              </ul>
            </CardList>
          </div>
          <img src={component} alt="creating component"></img>
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
          <img src={styles} alt="styles"></img>
        </div>
        <div>
          <h2>Outcome</h2>
          <ul>
            <li class="default">
              I took the design system from 1 page to 41 pages to accommodate
              all products and features
            </li>
            <li class="default">
              The design system now includes all UI components for every product
              external and internal, design tokens, and hundreds of frames of
              documentation (refactoring, schemas, dependencies)
            </li>
            <li class="default">
              Previously, only 3 people in the company looked at Storybook to
              view the design system including myself
            </li>
            <li class="default">
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
            effectively advocate for UX best practices.{" "}
          </p>
        </div>
      </div>
    </Template>
  );
};
export default DSManagerPage;
