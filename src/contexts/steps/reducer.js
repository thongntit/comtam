import { actions } from "contexts/steps/action";

export default (state, action) => {
  switch (action.type) {
    case actions.nextStep: {
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    }
    case actions.previousStep: {
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    }
    case actions.gotoStep: {
      return {
        ...state,
        currentStep: action.value,
      };
    }
    case actions.requestNextStep: {
      return {
        ...state,
        requestNextStep: true,
      };
    }
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
};
