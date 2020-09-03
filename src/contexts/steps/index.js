import React from "react";
import stepsReducer from "./reducer";

const initialState = { currentStep: 0 };
const StepsContext = React.createContext(undefined);
const StepsDispatchContext = React.createContext(undefined);

const StepsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(stepsReducer, initialState);
  return (
    <StepsContext.Provider value={state}>
      <StepsDispatchContext.Provider value={dispatch}>
        {children}
      </StepsDispatchContext.Provider>
    </StepsContext.Provider>
  );
};
const useStepsState = () => {
  const context = React.useContext(StepsContext);
  if (context === undefined) {
    throw new Error("useCartState must be used within a StepsProvider");
  }
  return context;
};

const useStepsDispatchState = () => {
  const context = React.useContext(StepsDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useStepsDispatchState must be used within a StepsDispatchProvider"
    );
  }
  return context;
};

export * from "./action";
export { StepsProvider, useStepsState, useStepsDispatchState };
