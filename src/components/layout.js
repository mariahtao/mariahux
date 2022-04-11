import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Nav from "./nav.js";
import Header from "./header.js";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="block pt-12 pb-12 max-w-4xl container">
        <div className="flex flex-row">
          <div className="order-last md:order-first">
            <Nav />
          </div>
          <div className="w-full md:flex-grow">
            <main className="flex-grow md:ml-52">
              <h1>{pageTitle}</h1>
              {children}
            </main>
          </div>  
        </div>
    </div>
  )
}
export default Layout
