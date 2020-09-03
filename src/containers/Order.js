import Header from "components/headers/light.js";
import Menu from "components/menu/SelectableMenu";
import Steps from "components/steps/Steps";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import React from "react";
export default () => {
  return (
    <AnimationRevealPage visible={true} >
      <Header />
      <Steps />
      <Menu />
    </AnimationRevealPage>
  );
};
