import { SectionHeading } from "components/misc/Headings.js";
import { actions, useCartDispatchState } from "contexts";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import numeral from "numeral";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { additionalDish, mainDish } from "constants/menu";

//Components
const Heading = tw(SectionHeading)`lg:text-left`;

const Menu = tw.dl`mt-12`;
const Dishes = tw.div`select-none py-4 rounded-none text-center`;
const MenuContainer = tw.dt`flex justify-between items-center`;
const ActionLayout = tw.div`flex justify-between items-center`;
const DishName = tw.span`text-lg lg:text-xl font-semibold`;
const DishDetail = tw.span`text-base`;
const DishPrice = tw.span`text-lg lg:text-xl font-semibold`;
const MenuToggleIcon = styled.span`
  ${tw`cursor-pointer ml-2 bg-primary-500 text-gray-100 p-1 rounded-full hover:bg-primary-700 hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-auto h-auto`}
  }
`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const Divider = tw.span`divide-y divide-gray-400`;
const CardImageContainer = styled.img`
  ${tw`w-auto h-auto`} max-width: 60px;
  max-height: 60px;
`;
const DishNameContainer = tw.div`ml-2 flex flex-col text-left`;

export default ({ menu = null }) => {
  if (!menu || menu.length === 0) menu = [...mainDish, ...additionalDish];
  const cartDispatch = useCartDispatchState();

  return (
    <>
      <Heading>
        <HighlightedText>Menu</HighlightedText> hôm nay
      </Heading>
      <Menu>
        <Divider>
          {menu.map((dish, index) => (
            <Dishes key={index} className="group">
              <MenuContainer>
                <ActionLayout>
                  <CardImageContainer src={dish.imageSrc} />
                  <DishNameContainer>
                    <DishName>{dish.title}</DishName>
                    <DishDetail>{dish.content}</DishDetail>
                  </DishNameContainer>
                </ActionLayout>
                <ActionLayout>
                  <DishPrice>
                    {numeral(dish.price).format("0,0") + " VNĐ"}
                  </DishPrice>
                  <MenuToggleIcon
                    onClick={() => {
                      cartDispatch({
                        type: actions.addItem,
                        dish,
                      });
                    }}
                  >
                    <PlusIcon />
                  </MenuToggleIcon>
                </ActionLayout>
              </MenuContainer>
            </Dishes>
          ))}
        </Divider>
      </Menu>
    </>
  );
};
