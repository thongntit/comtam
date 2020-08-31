import { SectionSubHeading } from "components/misc/Headings.js";
import { mainDish } from "constants/menu";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as SubtractIcon } from "feather-icons/dist/icons/minus.svg";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Heading = tw(SectionSubHeading)`lg:text-left`;

const Menu = tw.dl`mt-2`;
const Count = tw.span`font-semibold`;
const Dishes = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const FlexContainer = tw.dt`flex justify-between items-center`;
const DishName = tw.span`text-sm font-semibold`;
const DishPrice = tw.span`text-sm font-semibold`;
const AddIcon = styled.span`
  ${tw`mx-2 bg-green-500 text-gray-100 p-1 group-hover:bg-green-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-2 h-2`}
  }
`;
const MinusIcon = styled.span`
  ${tw`mx-2 bg-gray-500 text-gray-100 p-1 group-hover:bg-gray-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-2 h-2`}
  }
`;
// const Divider = tw.span`divide-solid`;
export default ({ heading = "Menu", menu = null }) => {
  if (!menu || menu.length === 0) menu = mainDish;

  return (
    <>
      <Menu>
        <Heading>Tóm tắt</Heading>
        {menu.map((dish, index) => (
          <>
            <Dishes key={index} className="group">
              <FlexContainer>
                <FlexContainer>
                  <AddIcon>
                    <PlusIcon />
                  </AddIcon>
                  <Count>1</Count>
                  <MinusIcon>
                    <SubtractIcon />
                  </MinusIcon>
                  <DishName>{dish.content}</DishName>
                </FlexContainer>
                <DishPrice>{dish.price}</DishPrice>
              </FlexContainer>
              <br />
              <FlexContainer>
                <span>Cộng</span>
                <span>100.000</span>
              </FlexContainer>
            </Dishes>
            {/* <Divider /> */}
          </>
        ))}
      </Menu>
    </>
  );
};
