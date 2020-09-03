import { ReactComponent as CheckIcon } from "feather-icons/dist/icons/check-circle.svg";
import React from "react";
import tw from "twin.macro";
const StepImageContainer = tw.div`w-32 h-32 mx-auto rounded-full text-lg text-white flex items-center bg-green-500`;
const StepImage = tw.span`text-center w-full h-full text-white fill-current flex justify-center items-center`;
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-4`;
const Columns = tw.div`flex justify-center items-center text-center`;
const MainColumn = tw.div`lg:block w-6/12 p-6`;
const CompleteText = tw.div`text-3xl font-bold my-4`
const OrderCompleted = () => {
  return (
    <Container>
      <Content>
        <Columns>
          <MainColumn>
            <StepImageContainer>
              <StepImage>
                  <CheckIcon height="100px" width="100px" />
              </StepImage>
            </StepImageContainer>
            <CompleteText>Đặt hàng thành công!</CompleteText>
          </MainColumn>
        </Columns>
      </Content>
    </Container>
  );
};
export default OrderCompleted;
