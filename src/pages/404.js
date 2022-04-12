import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404">
      <p class="text-8xl mb-8">¯\_(ツ)_/¯</p>
      <p class="text-xl text-semibold">Yikes! 😬</p>
      <p>It looks like the page you're looking for doesn't exist.</p>
      <button href="/" type="button" class="text-white bg-grey-400 hover:bg-grey-100 focus:ring-2 focus:ring-aqua-100 font-medium rounded text-base px-4 py-2 text-center inline-flex items-center">
        Return home
      </button>
    </Layout>
  );
};

export default NotFoundPage;
