import * as React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Hey, I'm Mariah!">
      <text className="font-bold text-s text-transparent bg-clip-text bg-gradient-to-r from-aqua-600 to-aqua-100">SENIOR PRODUCT DESIGNER + UI ENGINEER</text>
      <p className="mt-8">I have 5+ years of experience in product development and design systems. In my work, you will find that research and creativity are a vital part of my problem solving process!</p>
      <p>Here is my select work.</p>
    </Layout>
  )
}

export default IndexPage

