import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Card = ({ h3, badge, children, href }) => {
  return (
    <div class="block p-4 space-y-4 bg-grey-200 rounded-md border border-grey-300 shadow-xl shadow-aqua-400/5">
      <main className="space-y-4">
        <h3>{h3}</h3>
        <div class="flex flex-row flex-wrap gap-2">
          <badge>
            <span class="bg-aqua-400/20 text-aqua-100 text-sm font-sb border border-white/10 px-2 py-1 rounded">
              {badge}
            </span>
          </badge>
          <badge>
            <span class="bg-aqua-400/20 text-aqua-100 text-sm font-sb border border-white/10 px-2 py-1 rounded">
              {badge}
            </span>
          </badge>
          <badge>
            <span class="bg-aqua-400/20 text-aqua-100 text-sm font-sb border border-white/10 px-2 py-1 rounded">
              {badge}
            </span>
          </badge>
        </div>
        {children}
        <button
          type="button"
          class="text-white bg-grey-400 hover:bg-grey-100 focus:ring-2 focus:ring-aqua-100 font-medium rounded text-base px-4 py-2 text-center flex-initial inline-flex items-center shadow-lg shadow-aqua-400/10"
        >
          View
          <svg
            class="ml-3"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <path
              d="M12.285 1.22a.75.75 0 0 0-1.061 1.061l6.57 6.57H.75a.75.75 0 1 0 0 1.5h17.059l-6.585 6.585a.75.75 0 0 0 1.061 1.061l7.151-7.15a1.75 1.75 0 0 0 0-2.475L12.285 1.22z"
              fill="#fff"
            />
          </svg>
        </button>
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
