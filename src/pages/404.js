import * as React from "react";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404" title="Mariah UX">
      <p class="text-8xl mb-8">¯\_(ツ)_/¯</p>
      <p class="text-xl text-semibold">Yikes! 😬</p>
      <p>It looks like the page you're looking for doesn't exist.</p>
      <a href="/">
        <button
          type="button"
          class="bg-grey-300 border border-white/20 hover:bg-grey-400 focus:ring-2 focus:ring-aqua-400 rounded px-4 py-2 text-center flex-initial inline-flex items-center gap-1 shadow-lg shadow-aqua-400/10 transition-all duration-500 ease-in-out"
        >
          Return home
        </button>
      </a>
    </Layout>
  );
};

export default NotFoundPage;
