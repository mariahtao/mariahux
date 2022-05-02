import * as React from "react";
import Nav from "./Nav.js";
import { motion, AnimatePresence } from "framer-motion";
import { Location } from "@reach/router";

const duration = 0.5;

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
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

const Layout = ({ pageTitle, title, children }) => {
  return (
    <div className="block absolute sm:relative main">
      <div className="flex">
        <div className="flex-none">
          <Nav />
        </div>
        <div className="w-full">
          <main className="flex-auto sm:pt-0 pt-14 sm:ml-56">
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
                    {children}
                  </motion.main>
                </AnimatePresence>
              )}
            </Location>
            <title>{title}</title>
          </main>
        </div>
      </div>
    </div>
  );
};
export default Layout;
