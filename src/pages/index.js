import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import CardWork from "../components/cardWork";
import dev from "../assets/dev.svg";

const IndexPage = () => {
  const projects = useStaticQuery(graphql`
    query Projects {
      allSanityProjects {
        nodes {
          title
        tags {
          tag
        }
        badges {
          badge
        }
        }
      }
    }
  `);
  return (
    <Layout pageTitle="Hey, I'm Mariah!">
      <div className="grid grid-cols-1">
        <div className="col-span-1">
        <text className="font-sb text-lg text-transparent bg-clip-text bg-gradient-to-r from-aqua-600 to-aqua-100">
          UI ENGINEER + DESIGNER
        </text>
        <svg className="w-80 h-80 md:w-full md:h-auto" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 390 390" fill="none">
          <path class="dev-motion" d="M30.034 79.219c6.01 0 10.882-4.872 10.882-10.882s-4.872-10.882-10.882-10.882-10.882 4.872-10.882 10.882 4.872 10.882 10.882 10.882zm0-1.741c5.048 0 9.141-4.092 9.141-9.141s-4.092-9.141-9.141-9.141-9.141 4.092-9.141 9.141 4.092 9.141 9.141 9.141zm49.185-9.141c0 6.01-4.872 10.882-10.882 10.882s-10.882-4.872-10.882-10.882 4.872-10.882 10.882-10.882 10.882 4.872 10.882 10.882zm-1.741 0c0 5.048-4.092 9.141-9.141 9.141s-9.141-4.092-9.141-9.141 4.092-9.141 9.141-9.141 9.141 4.092 9.141 9.141zm29.163 10.882c6.009 0 10.881-4.872 10.881-10.882s-4.872-10.882-10.881-10.882-10.882 4.872-10.882 10.882 4.872 10.882 10.882 10.882zm0-1.741a9.14 9.14 0 1 0 0-18.282c-5.048 0-9.141 4.092-9.141 9.141s4.092 9.141 9.141 9.141z" fill-rule="evenodd" fill="#fff"/>
          <path class="dev-motion" d="M18.281 146.25a.87.87 0 0 1 .87-.871h80.961a.871.871 0 1 1 0 1.742h-80.96a.87.87 0 0 1-.87-.871zm102.723 38.304a.871.871 0 1 0 0 1.741h60.067a.871.871 0 1 0 0-1.741h-60.067zm-11.316-38.304a.87.87 0 0 1 .871-.871h44.397a.871.871 0 1 1 0 1.742h-44.397a.87.87 0 0 1-.871-.871zm-73.126 18.281a.871.871 0 1 0 0 1.741h56.586a.871.871 0 1 0 0-1.741H36.562zm66.161.871a.87.87 0 0 1 .871-.871h83.571a.871.871 0 1 1 0 1.741h-83.571a.87.87 0 0 1-.871-.87zm-66.16 58.326a.871.871 0 1 0 0 1.741h99.242a.871.871 0 1 0 0-1.741H36.563zM18.281 243.75a.87.87 0 0 1 .87-.871h97.5a.871.871 0 1 1 0 1.742h-97.5a.87.87 0 0 1-.87-.871zm35.691-59.196a.871.871 0 1 0 0 1.741h56.587a.871.871 0 1 0 0-1.741H53.972zm136.675.87a.87.87 0 0 1 .871-.87h97.5a.871.871 0 1 1 0 1.741h-97.5a.87.87 0 0 1-.871-.871zm-54.843 19.152a.871.871 0 1 0 0 1.741h87.924a.871.871 0 1 0 0-1.741h-87.924zm-82.702.87a.87.87 0 0 1 .871-.87h71.386a.871.871 0 1 1 0 1.741H53.972a.87.87 0 0 1-.871-.871zm181.072-.87a.871.871 0 1 0 0 1.741h26.116a.871.871 0 1 0 0-1.741h-26.116zM29.346 107.985a.87.87 0 0 1-.025 1.23l-8.912 8.556 8.912 8.556a.871.871 0 1 1-1.206 1.256l-8.912-8.556a1.74 1.74 0 0 1 0-2.512l8.912-8.556a.87.87 0 0 1 1.231.026zm19.968 1.422a.871.871 0 1 1 1.206-1.256l8.912 8.555a1.74 1.74 0 0 1 0 2.512l-8.912 8.556a.871.871 0 1 1-1.206-1.256l8.912-8.556-8.912-8.555zm-6.116-4.907a.87.87 0 0 1 .589 1.081l-7.27 24.681a.87.87 0 1 1-1.67-.492l7.27-24.681a.87.87 0 0 1 1.081-.589zM29.321 262.43a.871.871 0 1 0-1.206-1.256l-8.912 8.555a1.74 1.74 0 0 0 0 2.512l8.912 8.556a.871.871 0 1 0 1.206-1.256l-8.912-8.556 8.912-8.555zm19.968-1.04a.87.87 0 0 0 .025 1.231l8.912 8.556-8.912 8.555a.871.871 0 1 0 1.206 1.256l8.912-8.555a1.74 1.74 0 0 0 0-2.512l-8.912-8.556a.87.87 0 0 0-1.231.025zm-5.502-2.595a.87.87 0 1 0-1.67-.492l-7.27 24.681a.87.87 0 1 0 1.67.492l7.27-24.681z" fill="#fff"/>
          <path class="dev-motion" fill-rule="evenodd" d="M331.674 253.326h43.527c8.173 0 14.799-6.626 14.799-14.799V14.799C390 6.626 383.374 0 375.201 0H73.125c-8.173 0-14.799 6.626-14.799 14.799v28.728H14.799C6.626 43.527 0 50.153 0 58.326v230.692c0 8.173 6.626 14.799 14.799 14.799h302.076c8.173 0 14.799-6.626 14.799-14.799v-35.692zm56.585-238.527a13.06 13.06 0 0 0-13.058-13.058H73.125a13.06 13.06 0 0 0-13.058 13.058v28.728h256.808c8.173 0 14.799 6.626 14.799 14.799v193.259h43.527a13.06 13.06 0 0 0 13.058-13.058V14.799zM1.741 58.326a13.06 13.06 0 0 1 13.058-13.058h302.076a13.06 13.06 0 0 1 13.058 13.058v30.462a.87.87 0 0 0-.87-.864H3.047a.87.87 0 1 0 0 1.741h326.016a.87.87 0 0 0 .87-.864v200.216a13.06 13.06 0 0 1-13.058 13.058H14.799a13.06 13.06 0 0 1-13.058-13.058V58.326z" fill="#fff"/>
        </svg>
          <p className="mt-16">
            I have 5 + years of experience in product development and design
            systems. In my work, you will find that research and creativity are
            a vital part of my problem solving process!
          </p>
          <p> Here is my select work. </p>
        {projects.allSanityProjects.nodes.map((project, index) => (
          <div class="mt-16">
          <CardWork>
            <h3>{project.title}</h3>
            {project.tags.map((tag, tagIndex) => {
              if (tagIndex === project.tags.length - 1) {
                return tag.tag;
              }
                return `${tag.tag} | `;
            })}
            {project.badges.map((badge, badgeIndex) => {
              if (badgeIndex === project.badges.length - 1) {
                return badge.badge;
              }
                return `${badge.badge} | `;
            })}
          </CardWork>
        </div>
        ))}
        </div>
      </div>
    </Layout>
  );
};
export default IndexPage;
