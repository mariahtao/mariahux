import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Nav from "./nav.js";
import Header from "./header.js";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="block absolute md:relative pt-0 md:pt-10 pb-14 max-w-4xl container">
        <div className="flex">
          <div className="flex-none">
            <Nav />
          </div>
          <div className="w-full">
            <main className="flex-auto md:pt-0 pt-14 md:ml-56">
              <h1>{pageTitle}</h1>
              {children}
            </main>
          </div>  
        </div>
    </div>
  )
}
export default Layout
