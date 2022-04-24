import * as React from "react";
import Nav from "./nav.js";

const Template = ({ pageTitle, Title, children }) => {
  return (
    <div className="block absolute md:relative pt-0 md:pt-10 pb-14 max-w-4xl container">
      <div className="flex">
        <div className="flex-none">
          <Nav />
        </div>
        <div className="w-full">
          <main className="flex-auto md:pt-0 pt-14 md:ml-56">
            <title>{Title}</title>
            <h1>{pageTitle}</h1>
            <p className="my-14"> 
              Due to an NDA contract I am unable to disclose specific contents
              of my work publicly. If you would like to see my work, reach out
              at mariahtao@gmail.com.
            </p>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
export default Template;
