import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

//arrayBadge = [badge1, badge2, badge3]

const Card = ({ h3, badge1, badge2, badge3, children, href }) => {
  return (
    <div class="card">
      <main className="space-y-4">
        <div class="flex flex-wrap gap-2 md:justify-between">
          <h3>{h3}</h3>
          <a href={href}>
            <button
              type="button"
              class="text-white bg-grey-300 border border-white/20 hover:bg-grey-400 focus:ring-2 focus:ring-aqua-400 rounded text-base px-4 py-2 text-center flex-initial inline-flex items-center gap-1 shadow-lg shadow-aqua-400/10"
            >
              View
              <svg
                width="16"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m5.195 3.805 4.59 4.197-4.59 3.863a.664.664 0 1 0 .94.94l5.063-4.337c.26-.26.26-.68 0-.94l-5.063-4.67a.664.664 0 0 0-.94 0 .678.678 0 0 0 0 .947Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </a>
        </div>
        <div class="flex flex-row flex-wrap gap-2">
          <badge>
            <span class="bg-aqua-400/20 text-aqua-100 text-sm font-sb border border-white/10 px-2 py-1 rounded">
              {badge1}
            </span>
          </badge>
          <badge>
            <span class="bg-aqua-400/20 text-aqua-100 text-sm font-sb border border-white/10 px-2 py-1 rounded">
              {badge2}
            </span>
          </badge>
          <badge>
            <span class="bg-aqua-400/20 text-aqua-100 text-sm font-sb border border-white/10 px-2 py-1 rounded">
              {badge3}
            </span>
          </badge>
        </div>
        {children}
      </main>
    </div>
  );
};
export default Card;

/* {badge((badge, badgeIndex) => {
          if (badgeIndex === badge.length - 1) {
            return badge.badge;
          }
          return `${badge.badge}`;
        })}*/
