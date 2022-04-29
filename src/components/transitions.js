import * as React from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";
import { Location } from "@reach/router";
import { useLocation } from 'react-router-dom';

const timeout = 500;
const getStyles = {
  entering: {
    position: "absolute",
    opacity: 0,
  },
  entered: {
    transition: "opacity ${timeout}ms ease-in-out",
    opacity: 1,
  },
  exiting: {
    transition: "all ${timeout}ms ease-in-out",
    opacity: 0,
  },
};

const Transition = ({ children }) => {
  return (
    <Location>
      {({ location }) => (
        <TransitionGroup>
          <ReactTransition
            key={location.pathname}
            timeout={{
              enter: timeout,
              exit: timeout,
            }}
          >
            {(status) => <div style={{ ...getStyles[status] }}></div>}
            {children}
          </ReactTransition>
        </TransitionGroup>
      )}
    </Location>
  );
};
export default Transition;
