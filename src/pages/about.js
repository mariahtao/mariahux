import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
        <p> Hey there 👋🏼 . I am a Seattleite now living in Arizona, originally from California.</p>
        <p> In my free time, you can find me spending time with my family and friends. I enjoy yoga, crypto, streetwear fashion, and binge-watching anime.</p>
    </Layout>
  )  
}

export default AboutPage