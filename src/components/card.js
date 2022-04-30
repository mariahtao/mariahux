import * as React from "react";

const Card = ({ h2, badge1, badge2, badge3, tag1, tag2, tag3, children, href }) => {
  return (
    <div className="card">
      <main className="space-y-4">
        <div className="flex items-center flex-wrap gap-2 sm:justify-between">
          <h2 className="mb-0">{h2}</h2>
          <a href={href}>
            <button
              type="button"
              className="default"
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
        <div className="flex flex-row flex-wrap gap-2">
          <badge>
            <span className="badge">{badge1}</span>
          </badge>
          <badge>
            <span className="badge">{badge2}</span>
          </badge>
          <badge>
            <span className="badge">{badge3}</span>
          </badge>
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          <tag>
            <span className="tag">{tag1}</span>
          </tag>
          •
          <tag>
            <span className="tag">{tag2}</span>
          </tag>
          •
          <tag>
            <span className="tag">{tag3}</span>
          </tag>
        </div>
        {children}
      </main>
    </div>
  );
};
export default Card;