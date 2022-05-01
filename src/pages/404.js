import * as React from "react";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404" title="Mariah Tao">
      <p className="text-8xl pt-4 mb-8">¯\_(ツ)_/¯</p>
      <p className="text-xl text-semibold">Yikes! 😬</p>
      <p>It looks like the page you're looking for doesn't exist.</p>
      <a href="/">
        <button
          type="button"
          className="default"
        >
          Return home
        </button>
      </a>
    </Layout>
  );
};

export default NotFoundPage;
