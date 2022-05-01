import * as React from "react";
import Template from "../components/template";
import CardList from "../components/cardList";
import diagram from "../assets/diagram.png";
import tt from "../assets/tt.png";

const TestTakerPage = () => {
  return (
    <Template
      pageTitle="Test taker experience"
      Title="Mariah Tao"
    >
      <div className="space-y-14">
        <CardList>
          <h2>My role</h2>
          <ul className="mb-0">
            <li className="default">Redesign the entire test taker experience</li>
            <li className="default">
              Project manage and conduct user research for the product team
            </li>
            <li className="default">
              Work alongside engineering during delivery phase
            </li>
          </ul>
        </CardList>
        <div>
          <h2>Scope</h2>
          <p>
            Proctorio offers a suite of remote proctoring services that
            integrate with various learning management platforms. In this
            project, I improved the test taking experience for a student.
          </p>
          <h3>Problem statement</h3>
          <p>
            To keep up with our growing user base the software needed to improve
            in efficiency and overall experience. The existing test taker exam
            set up experience was slow, stressful, confusing, and made test
            taking even more difficult for students.
          </p>
          <h3>Goals</h3>
          <ul className="pb-4">
            <li className="default">
              Reduce the anxiety and stress for a test taker with an ideal
              experience for setting up an exam
            </li>
            <li className="default">
              Improve the functionality, flow, navigation, and the design of the
              new version
            </li>
          </ul>
          <h3>Timeline</h3>
          <ul>
            <li className="default">
              Week 1: planning research and recruiting participants
            </li>
            <li className="default">Week 2 & 3: research sessions</li>
            <li className="default">
              Week 4: present finalized results and new product to stakeholders
            </li>
          </ul>
        </div>
        <div>
          <h2>Research methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <CardList>
              <p className="mb-2 font-semibold text-aqua-500">
                User interviews
              </p>
              <ul className="mb-0">
                <li className="default">
                  Asking questions to understand the behavior of users while
                  preparing for an exam
                </li>
                <li className="default">
                  Understanding different use cases that can lead to pain points
                </li>
              </ul>
            </CardList>
            <CardList>
              <p className="mb-2 font-semibold text-aqua-500">
                Usability tests
              </p>
              <ul className="mb-0">
                <li className="default">
                  Understanding how users navigate new features
                </li>
                <li className="default">
                  Ask usability questions to understand the pain points for
                  users
                </li>
              </ul>
            </CardList>
          </div>
          <h3>Findings</h3>
          <img
            className="shadow-none"
            src={diagram}
            alt="affinity diagram of research findings"
          ></img>
        </div>
        <div>
          <h2>Outcome</h2>
          <ul>
            <li className="default">
              Progress indicator to help a test taker understand where they are
              in the exam set up stage
            </li>
            <li className="default">
              Validation states that clearly define what the user needs to do to
              move forward
            </li>
            <li className="default">
              Onboarding tooltips to point out new features
            </li>
            <li className="default">Consistency amongst visual indicators</li>
          </ul>
          <img className="shadow-none" src={tt} alt="final design of new test taker experience"></img>
        </div>
      </div>
    </Template>
  );
};
export default TestTakerPage;
