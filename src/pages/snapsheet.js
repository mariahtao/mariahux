import * as React from "react";
import Template from "../components/template";
import CardList from "../components/cardList";
import snapsheet from "../assets/snapsheet.png";

const ProjectTrackingPage = () => {
  return (
    <Template
      pageTitle="Snapsheet's CORE + VICE"
      Title="MUX | Snapsheet"
    >
      <div className="space-y-14">
        <CardList>
          <h2>My role</h2>
          <ul class="mb-0">
            <li class="default">
              Redesign the internal project tracking software and add new
              features
            </li>
            <li class="default">
              Conduct user research and competitive analysis
            </li>
            <li class="default">
              Lead work on information architecture, product redesign, design
              system, and tech writing
            </li>
            <li class="default">
              Work with engineering to define new functionality
            </li>
          </ul>
        </CardList>
        <div>
          <h2>Scope</h2>
          <p>
            Snapsheet is a cloud-native claims management platform that enables
            insurance carriers, third-party administrators, and economy
            disruptors to deliver the best experiences for everyone involved in
            the claims process.
          </p>
          <h3>Problem statement</h3>
          <p>
            Individual contributors have difficulty prioritizing their work
            queue because there is no clear distinction between low, medium,
            high, and urgent priority tasks. A manager needs to understand the
            progress and performance of the team. A manager also needs to have
            the required information to be able to take action when issues and
            blockers hinder the team performance.
          </p>
          <h3>Goals</h3>
          <p>
            Enable individual contributors to prioritize their workflow and
            successfully complete tasks in an ideal timeline. Enable managers to
            track the performance of the team and to eliminate blockers to reach
            performance goals.
          </p>
          <h3>Timeline</h3>
          <ul>
            <li class="default">
              Week 1: initial heuristic evaluation, competitive analysis,
              planning research, and recruiting participants
            </li>
            <li class="default">Week 2: research sessions</li>
            <li class="default">Week 3: iterated new UI and new features</li>
            <li class="default">
              Week 4: present finalized results and new product to stakeholders
            </li>
          </ul>
        </div>
        <div>
          <h2>Research methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-8">
            <CardList>
              <p className="mb-2 font-semibold text-aqua-500">
                Standardizing user research
              </p>
              <ul class="mb-0">
                <li class="default">
                  Created a pipeline for user research from the ground up
                </li>
                <li class="default">
                  Created a company wide standard format for user research
                </li>
              </ul>
            </CardList>
            <CardList>
              <p className="mb-2 font-semibold text-aqua-500">
                User interviews
              </p>
              <ul class="mb-0">
                <li class="default">Conducted 8 user interviews</li>
                <li class="default">
                  Personas interviewed: manager and individual contributor
                </li>
              </ul>
            </CardList>
          </div>
          <h3>Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <CardList>
              <p className="mb-2 font-semibold text-aqua-500">
                Manager persona
              </p>
              <ul class="mb-0">
                <li class="default">
                  Automatic alerts/escalation on files to prioritize things that
                  are overdue
                </li>
                <li class="default">Different data views and color coding</li>
                <li class="default">
                  Completed actions/completed tasks per a day
                </li>
                <li class="default">Data visualization & metrics</li>
              </ul>
            </CardList>
            <CardList>
              <p className="mb-2 font-semibold text-aqua-500">
                Individual contributor persona
              </p>
              <ul class="mb-0">
                <li class="default">
                  Prioritized list of what needs to be done today or this week
                  and notification for outstanding tasks
                </li>
                <li class="default">
                  Tracking how many files someone is closing and touching a day
                </li>
              </ul>
            </CardList>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <h2 className="mb-0">Outcome</h2>
          <img
              className="shadow-none"
              src={snapsheet}
              alt="Core + vice final design"
            ></img>
          <div>
            <h3>Task manager new features</h3>
            <h4>Objective</h4>
            <ul className="mb-4">
              <li class="default">
                To see an overview of all tasks that have been assigned
                currently
              </li>
              <li class="default">
                To quickly identify tasks that require immediate attention
              </li>
            </ul>
            <h4>Key features</h4>
            <ul className="mb-4">
              <li class="default">Customizable data view</li>
              <li class="default">Refresh new tasks into queue</li>
            </ul>
          </div>
          <div class="mt-4">
            <h3>Analytics overview</h3>
            <h4>Objective</h4>
            <ul className="mb-4">
              <li class="default">To be able to see a general overview of historical performance with data visualization and metrics</li>
              <li class="default">Areas that require attention or immediate action</li>
              <li class="default">Understand goals for the day</li>
            </ul>
            <h4>Key features</h4>
            <ul className="mb-4">
              <li class="default">Team performance data</li>
              <li class="default">Alerts</li>
              <li class="default">Preformance goals</li>
            </ul>
          </div>
        </div>
      </div>
    </Template>
  );
};
export default ProjectTrackingPage;
