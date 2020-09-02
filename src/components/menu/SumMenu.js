import { SectionSubHeading } from "components/misc/Headings.js";
import { actions, useCartDispatchState, useCartState } from "contexts/cart";
import { ReactComponent as SubtractIcon } from "feather-icons/dist/icons/minus.svg";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import numeral from "numeral";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Heading = tw(SectionSubHeading)`lg:text-left text-primary-500`;

const Menu = tw.dl`mt-2`;
const Count = tw.span`font-semibold`;
const Dishes = tw.div`cursor-pointer mt-2 select-none border lg:border-0 px-8 py-2 lg:p-0 rounded-lg lg:rounded-none`;
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
const Divider = tw.span`divide-y divide-gray-400`;
const TotalText = tw.div`py-2 text-primary-500`;
const Items = tw.div`py-2`;
const Button = tw.button`bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded w-full`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 py-2 my-2 transform -skew-x-12 inline-block`;

export default () => {
  const cart = useCartState();
  const dispatch = useCartDispatchState();
  const totalAmount = cart.items.reduce((acc, item) => {
    return (acc += item.quatity * item.price);
  }, 0);
  return cart.items.length > 0 ? (
    <>
      <Menu>
        <Heading>Tóm tắt</Heading>
        <Divider>
          <Items>
            {cart.items.map((dish, index) => (
              <>
                <Dishes key={index} className="group">
                  <FlexContainer>
                    <FlexContainer>
                      <AddIcon
                        onClick={() =>
                          dispatch({
                            type: actions.addItem,
                            dish,
                          })
                        }
                      >
                        <PlusIcon />
                      </AddIcon>
                      <Count>{dish.quatity}</Count>
                      <MinusIcon
                        onClick={() =>
                          dispatch({
                            type: actions.removeItem,
                            dish,
                          })
                        }
                      >
                        <SubtractIcon />
                      </MinusIcon>
                      <DishName>{dish.content}</DishName>
                    </FlexContainer>
                    <DishPrice>
                      {numeral(dish.price).format("0,0") + "đ"}
                    </DishPrice>
                  </FlexContainer>
                  <FlexContainer>
                    <span>Cộng</span>
                    <span>
                      {numeral(parseInt(dish.price) * dish.quatity).format(
                        "0,0"
                      ) + " VNĐ"}
                    </span>
                  </FlexContainer>
                </Dishes>
              </>
            ))}
          </Items>
          <FlexContainer>
            <TotalText>Tổng cộng</TotalText>
            <HighlightedText>
              {numeral(totalAmount).format("0,0") + " VNĐ"}
            </HighlightedText>
          </FlexContainer>
          <Button>Đặt trước</Button>
        </Divider>
      </Menu>
    </>
  ) : null;
};
