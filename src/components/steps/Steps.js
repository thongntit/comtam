import React from "react";
import tw, { styled } from "twin.macro";
import { ReactComponent as ClipboardIcon } from "feather-icons/dist/icons/clipboard.svg";
import { ReactComponent as CheckIcon } from "feather-icons/dist/icons/check.svg";
import { ReactComponent as TruckIcon } from "feather-icons/dist/icons/truck.svg";
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const FlexContainer = tw.div`flex py-12 w-1/2 self-center`;
const Step = tw.div`w-1/3`;
const StepContainer = tw.div`relative mb-2`;
const StepImageContainer = styled.div`
  ${tw`w-10 h-10 mx-auto rounded-full text-lg text-white flex items-center bg-primary-500`} ${({
    completed,
  }) => (!completed ? tw`bg-white border-2 border-gray-200` : null)}
`;
const StepImage = styled.span`
  ${tw`text-center w-full`} ${({ completed }) =>
    completed ? tw`text-white` : tw`text-gray-600`}
`;
const StepSvg = styled.svg`
  ${tw`w-full fill-current`}
`;
const StepText = tw.div`text-xs text-center md:text-base`;
const LineContainer = styled.div`
  ${tw`absolute flex text-center items-center align-middle content-center`}
  width: calc(100% - 2.5rem - 1rem);
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Line = styled.div`
  ${tw`w-full  py-1 rounded`}
  ${({ completed }) => (completed ? tw`bg-primary-300` : tw`bg-gray-300`)}
`;

const Steps = () => {
  return (
    <Container>
      <FlexContainer>
        <Step>
          <StepContainer>
            <StepImageContainer completed>
              <StepImage completed>
                <StepSvg viewBox="0 0 24 24" width="24" height="24">
                  <ClipboardIcon />
                </StepSvg>
              </StepImage>
            </StepImageContainer>
          </StepContainer>
          <StepText>Chọn món</StepText>
        </Step>

        <Step>
          <StepContainer>
            <LineContainer>
              <Line completed />
            </LineContainer>
            <StepImageContainer completed>
              <StepImage completed>
                <StepSvg viewBox="0 0 24 24" width="24" height="24">
                  <TruckIcon />
                </StepSvg>
              </StepImage>
            </StepImageContainer>
          </StepContainer>
          <StepText>Giao hàng</StepText>
        </Step>

        <Step>
          <StepContainer>
            <LineContainer>
              <Line />
            </LineContainer>
            <StepImageContainer>
              <StepImage>
                <StepSvg viewBox="0 0 24 24" width="24" height="24">
                  <CheckIcon />
                </StepSvg>
              </StepImage>
            </StepImageContainer>
          </StepContainer>

          <StepText>Hoàn tất</StepText>
        </Step>
      </FlexContainer>
    </Container>
  );
};
export default Steps;
