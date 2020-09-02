import { SectionSubHeading } from "components/misc/Headings.js";
import { mainDish } from "constants/menu";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as SubtractIcon } from "feather-icons/dist/icons/minus.svg";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useCartState, useCartDispatchState, actions } from "contexts/cart";
import numeral from "numeral";

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
  const cart = useCartState();
  const dispatch = useCartDispatchState();
  console.log(cart, "cart state");
  return (
    <>
      <Menu>
        <Heading>Tóm tắt</Heading>
        {cart.items.map(
          (dish, index) =>
            dish && (
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
                      <MinusIcon                          onClick={() =>
                            dispatch({
                              type: actions.removeItem,
                              dish,
                            })
                          }>
                        <SubtractIcon
 
                        />
                      </MinusIcon>
                      <DishName>{dish.content}</DishName>
                    </FlexContainer>
                    <DishPrice>
                      {numeral(dish.price).format("0,0") + "đ"}
                    </DishPrice>
                  </FlexContainer>
                  <br />
                  <FlexContainer>
                    <span>Cộng</span>
                    <span>
                      {numeral(parseInt(dish.price) * dish.quatity).format(
                        "0,0"
                      ) + " VNĐ"}
                    </span>
                  </FlexContainer>
                </Dishes>
                {/* <Divider /> */}
              </>
            )
        )}
      </Menu>
    </>
  );
};
