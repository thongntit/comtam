import { actions } from "contexts/steps/action";

export default (state, action) => {
  switch (action.type) {
    case actions.nextStep: {
      return {
        currentStep: state.currentStep + 1,
      };
    }
    case actions.previousStep: {
      return {
        currentStep: state.currentStep - 1,
      };
    }
    case actions.gotoStep: {
      return {
        currentStep: action.value,
      };
    }
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
};
