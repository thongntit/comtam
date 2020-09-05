import ShippingInfo from "components/shippingInfo/form";
import { useStepsState } from "contexts/steps";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import React from "react";
import tw from "twin.macro";
import DishList from "./DishList";
import SumMenu from "./SumMenu";
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-4`;

const Columns = tw.div`flex`;
const MainColumn = tw.div`lg:block w-6/12 p-6`;
const Hack = tw.div`lg:block w-1/12`;
const SideColumn = tw.div`lg:block w-4/12`;

export default () => {
  const steps = useStepsState();

  return (
    <Container>
      <Content>
        <Columns>
          <Hack></Hack>
          {steps.currentStep === 0 ? (
            <MainColumn>
                <DishList />
            </MainColumn>
          ) : (
            <MainColumn>
              <AnimationRevealPage>
                <ShippingInfo />
              </AnimationRevealPage>
            </MainColumn>
          )}
          <Hack></Hack>
          <SideColumn>
            <SumMenu />
          </SideColumn>
        </Columns>
      </Content>
    </Container>
  );
};
