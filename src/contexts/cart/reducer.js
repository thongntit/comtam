import { actions } from "contexts/cart/action";

export default (state, action) => {
  switch (action.type) {
    case actions.addItem: {
      const items = state.items;
      const itemIdx = items.findIndex((i) => i.id === action.dish.id);
      console.log(itemIdx, "add");
      if (itemIdx < 0) {
        items.push(action.dish);
      } else {
        items[itemIdx].quatity += 1;
      }
      return {
        ...state,
        items,
      };
    }
    case actions.removeItem: {
      let items = state.items;
      const itemIdx = items.findIndex((i) => i.id === action.dish.id);
      console.log(itemIdx, "remove");
      if (items[itemIdx].quatity === 1) {
        items.splice(itemIdx, 1);
      } else {
        items[itemIdx].quatity -= 1;
      }
      return {
        ...state,
        items,
      };
    }
    case actions.changeShippingInfo: {
      if (action.payload !== state.isLoggedIn)
        return { ...state, isLoggedIn: action.payload };
      else return state;
    }
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
};
