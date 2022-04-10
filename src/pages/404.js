import * as React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Button from '../components/button.js';


const NotFoundPage = () => {
  return (
    <Layout pageTitle="404">
      <p class="text-8xl mb-8">¯\_(ツ)_/¯</p>
      <p class="text-xl text-semibold">Yikes! 😬</p>
      <p>It looks like the page you're looking for doesn't exist.</p>
      <Button href="/" type="primary">
        Return home
      </Button>
    </Layout>
  )
}

export default NotFoundPage
