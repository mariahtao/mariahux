import * as React from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";

const timeout = 500
const getStyles = {
    entering: {
        position: 'absolute',
        opacity: 0,
    },
    entered: {
        transition: 'opacity ${timeout}ms ease-in-out',
        opacity: 1,
    },
    exiting: {
        transition: 'all ${timeout}ms ease-in-out',
        opacity:0,
    },
}

const Transition = ({ children, location }) => {
  return (
    <TransitionGroup>
      <ReactTransition
        key={location}
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
      >
        {(status) => <div style={{ ...getStyles[status] }}></div>}
      </ReactTransition>
    </TransitionGroup>
  );
};
export default Transition;
