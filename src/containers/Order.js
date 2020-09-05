import Header from "components/headers/light.js";
import Menu from "components/menu/SelectableMenu";
import Steps from "components/steps/Steps";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import React from "react";
import { useStepsState } from "contexts/steps";
import OrderCompleted from "components/orderComplete";
export default () => {
  const { currentStep } = useStepsState();
  return (
    <AnimationRevealPage visible={true}>
      <Header />
      <Steps />
      {currentStep === 2 ? (
        <AnimationRevealPage>
          <OrderCompleted />
        </AnimationRevealPage>
      ) : (
        <Menu />
      )}
    </AnimationRevealPage>
  );
};
