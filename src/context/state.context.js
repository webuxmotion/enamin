import React, { useState, createContext  } from "react";

const initialState = {
  counter: false,
  target: null
}

export const StateContext = createContext(initialState);

export const CounterContextProvider = props => {
  const [count, setCount] = useState(0);

  return (
    <StateContext.Provider value={[count, setCount]}>
            {props.children}
    </StateContext.Provider>
  
  );
};
