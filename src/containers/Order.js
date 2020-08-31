// import Features from "components/features/ThreeColWithSideImage.js";
import Menu from "components/menu/SelectableMenu";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Header from "components/headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import React from "react";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Menu />
      <Footer />
    </AnimationRevealPage>
  );
};
