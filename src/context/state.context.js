import React, { useState, createContext  } from "react";

import elements from '../constants/elements';

const initialState = {
  target: elements.B,
  timer: {
    tick: false,
    interval: 1000,
    counter: 0,
  }
}

export const StateContext = createContext(initialState);

export const StateContextProvider = props => {
  const [state, setState] = useState(initialState);

  return (
    <StateContext.Provider value={[state, setState]}>
      {props.children}
    </StateContext.Provider>
  );
};
