import * as React from "react";
import Template from "../components/template";
import CardList from "../components/cardList";
import diagram from "../assets/diagram.png";
import tt from "../assets/tt.png";

const TestTakerPage = () => {
  return (
    <Template
      pageTitle="Test taker experience"
      Title="Mariah UX"
    >
      <div className="space-y-14">
        <CardList>
          <h2>My role</h2>
          <ul class="mb-0">
            <li class="default">Redesign the entire test taker experience</li>
            <li class="default">
              Project manage and conduct user research for the product team
            </li>
            <li class="default">
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
          <h3>Problem statment</h3>
          <p>
            To keep up with our growing user base the software needed to improve
            in efficiency and overall experience. The existing test taker exam
            set up experience was slow, stressful, confusing, and made test
            taking even more difficult for students.
          </p>
          <h3>Goals</h3>
          <ul class="pb-4">
            <li class="default">
              Reduce the anxiety and stress for a test taker with an ideal
              experience for setting up an exam
            </li>
            <li class="default">
              Improve the functionality, flow, navigation, and the design of the
              new version
            </li>
          </ul>
          <h3>Timeline</h3>
          <ul>
            <li class="default">
              Week 1: planning research and recruiting participants
            </li>
            <li class="default">Week 2 & 3: research sessions</li>
            <li class="default">
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
              <ul class="mb-0">
                <li class="default">
                  Asking questions to understand the behavior of users while
                  preparing for an exam
                </li>
                <li class="default">
                  Understanding different use cases that can lead to pain points
                </li>
              </ul>
            </CardList>
            <CardList>
              <p className="mb-2 font-semibold text-aqua-500">
                Usability tests
              </p>
              <ul class="mb-0">
                <li class="default">
                  Understanding how users navigate new features
                </li>
                <li class="default">
                  Ask usability questions to understand the pain points for
                  users
                </li>
              </ul>
            </CardList>
          </div>
          <h3>Findings</h3>
          <img
            class="shadow-none"
            src={diagram}
            alt="affinity diagram of research findings"
          ></img>
        </div>
        <div>
          <h2>Outcome</h2>
          <ul>
            <li class="default">
              Progress indicator to help a test taker understand where they are
              in the exam set up stage
            </li>
            <li class="default">
              Validation states that clearly define what the user needs to do to
              move forward
            </li>
            <li class="default">
              Onboarding tooltips to point out new features
            </li>
            <li class="default">Consistency amongst visual indicators</li>
          </ul>
          <img className="shadow-none" src={tt} alt="final design of new test taker experience"></img>
        </div>
      </div>
    </Template>
  );
};
export default TestTakerPage;
