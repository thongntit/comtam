import { SectionHeading } from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { mainDish } from "constants/menu";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const Columns = tw.div`flex`;
const MainColumn = tw.div`lg:block w-6/12 p-6 shadow-2xl border-solid border-r-2 border-b-2 border-gray-300 rounded-lg`;
const SideColumn = tw.div`lg:block w-3/12`;

const Heading = tw(SectionHeading)`lg:text-left`;

const Menu = tw.dl`mt-12`;
const Dishes = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const MenuContainer = tw.dt`flex justify-between items-center`;
const ActionLayout = tw.dt`flex justify-between items-center`;
const DishName = tw.span`text-lg lg:text-xl font-semibold`;
const DishPrice = tw.span`text-lg lg:text-xl font-semibold`;
const MenuToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default ({ heading = "Menu", menu = null }) => {
  /*
   * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
   * the faqs prop
   */

  if (!menu || menu.length === 0) menu = mainDish;

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

  return (
    <Container>
      <Content>
        <Columns>
          <SideColumn></SideColumn>
          <MainColumn>
            <Heading>
              <HighlightedText>{heading}</HighlightedText> hôm nay
            </Heading>
            <Menu>
              {menu.map((dish, index) => (
                <Dishes key={index} className="group">
                  <MenuContainer>
                    <DishName>{dish.content}</DishName>
                    <ActionLayout>
                      <DishPrice>{dish.price}</DishPrice>
                      <MenuToggleIcon>
                        <PlusIcon
                          onClick={() => {
                            toggleQuestion(index);
                          }}
                        />
                      </MenuToggleIcon>
                    </ActionLayout>
                  </MenuContainer>
                </Dishes>
              ))}
            </Menu>
          </MainColumn>
          <SideColumn></SideColumn>
        </Columns>
      </Content>
    </Container>
  );
};
