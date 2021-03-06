import * as React from "react";
import Nav from "./Nav.js";
import { motion, AnimatePresence } from "framer-motion";
import { Location } from "@reach/router";

const duration = 0.4;

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
};

const Template = ({ pageTitle, Title, children }) => {
  return (
    <div className="block absolute md:relative main">
      <div className="flex">
        <div className="flex-none">
          <Nav />
        </div>
        <div className="w-full">
          <main className="flex-auto md:pt-0 pt-24 md:ml-56">
            <Location>
              {({ location }) => (
                <AnimatePresence>
                  <motion.main
                    key={location.pathname}
                    variants={variants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <h1>{pageTitle}</h1>
                    <p className="my-14">
                      Due to an NDA contract I am unable to disclose specific
                      contents of my work publicly. If you would like to see my
                      work, reach out at <a href="mailto:mariahtao@gmail.com" className="default">mariahtao@gmail.com ›</a>
                    </p>
                    {children}
                  </motion.main>
                </AnimatePresence>
              )}
            </Location>
            <title>{Title}</title>
          </main>
        </div>
      </div>
    </div>
  );
};
export default Template;
