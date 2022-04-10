import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Nav from "./Nav.js";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="grid grid-cols-4 gap-6 pt-12 max-w-4xl container ">
      <title>{pageTitle}</title>
      <Nav />
      <main className="col-span-3">
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout
