import * as React from "react";
import Template from "../components/template";
import CardList from "../components/cardList";
import examAdmin from "../assets/examAdmin.png";

const ExamAdminPage = () => {
  return (
    <Template pageTitle="Exam admin experience" Title="Mariah Tao">
      <div className="space-y-14">
        <CardList>
          <h2>My role</h2>
          <ul className="mb-0">
            <li className="default">Redesign the exam admin experience</li>
            <li className="default">
              Project manage and conduct user research for the product team
            </li>
            <li className="default">
              Define and document all information architecture interactions,
              flows, behaviors, and dependencies
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
            integrate with various learning management platforms. Instructors
            can choose which proctoring settings are applied to each test. In
            this project, I improved the test proctoring experience for an exam
            admin along with the engineering team.
          </p>
          <p>
            I conducted eight user tests over a period of two weeks. Each user
            test lasted about 60 minutes. I performed the role of facilitator,
            note taker, and analyzed and prioritized all results.
          </p>
          <h3>Problem statment</h3>
          <p>
            The remote test proctoring experience for an exam admin needed to be
            improved drastically with online school becoming the norm. The
            software needed to be more inclusive for test takers with
            accessibility needs and be more customizable for an exam admin.
          </p>
          <h3>Goals</h3>
          <p>
            Create a more inclusive remotely proctored exam experience with
            various accessibility options and enable exam admins to set up exam
            settings and remotely proctor an exam with ease.{" "}
          </p>
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
        <div className="space-y-6">
          <h2>Research methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardList>
              <p className="mb-2 font-semibold text-aqua-500">
                User interviews
              </p>
              <p className="mb-0">Understand the behavior of users.</p>
            </CardList>
            <CardList>
              <p className="mb-2 font-semibold text-aqua-500">
                Literature review
              </p>
              <p className="mb-0">
                Reviewing research ethics and appropriate practices.
              </p>
            </CardList>
            <CardList>
              <p className="mb-2 font-semibold text-aqua-500">
                Usability tests
              </p>
              <p className="mb-0">
                Understanding how users navigate new features through tasks and
                questions.
              </p>
            </CardList>
            <CardList>
              <p className="mb-2 font-semibold text-aqua-500">Analysis</p>
              <p className="mb-0">
                Using the themed issues from the research combined with business
                goals to make decisions on product improvements.
              </p>
            </CardList>
          </div>
        </div>
        <div>
          <h2>Outcome</h2>
          <ul>
            <li className="default">Consistency among design patterns</li>
            <li className="default">Actions of areas are clearly defined</li>
            <li className="default">
              Multiple new features for customization, accessibility, and ease
              of use
            </li>
          </ul>
          <img
            className="shadow-none"
            src={examAdmin}
            alt="New features on exam admin products"
          ></img>
        </div>
        <div>
          <h2>Challenges</h2>
          <h4>First challenge</h4>
          <p>I was challenged with only having a two week window to conduct research on two new features. I decided to test both new features in one session to ensure I hit my target range of 8-12 participants. This resulted in 60 minute user tests, which can be a bit long for a user to stay focused or motivated. I have found that 45 minute user tests are the sweet spot for the best results. I kept usability tasks minimal in order to answer my broader research questions without wasting time and preventing a user from losing interest.</p>
          <h4>Second challenge</h4>
          <p>I was challenged with playing the role of facilitator and note taker for this round of user research. It can be pretty difficult to write and read a script, take notes, watch behaviors, and remain unbiased while playing both roles. To ensure, the data is not skewed and the data remain unbiased, I prepared for a week straight. My preparation included: practicing the script until I had it memorized and two pilot tests. Knowing my research script inside and out made it easier to focus on the behavior of the user and taking notes rather than nervously reading a script. The two pilot tests honed my usability tasks and questions to produce the best data. This helped me to deliver a calm user test also helping the user to stay calm and relaxed during the session. </p>
        </div>
      </div>
    </Template>
  );
};
export default ExamAdminPage;
