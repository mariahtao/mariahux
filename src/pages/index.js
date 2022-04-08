import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
    <p>A Senior Product Designer with 5 years of experience in product development, scaling complex softwares, and building and managing design systems. In my work, you will find that research and creativity are a vital part of my problem solving process!</p>
  </Layout>

    /*<main>
      <title>Work</title>
      <h3>Senior Product Designer</h3>
      <h1>Hey, I'm Mariah!</h1>
      <Link to="/about">About</Link>
      <p>A Senior Product Designer with 5 years of experience in product development, scaling complex softwares, and building and managing design systems. In my work, you will find that research and creativity are a vital part of my problem solving process!</p>
      <p>Here is my selected work.</p>
    </main>*/
  )
}

export default IndexPage

