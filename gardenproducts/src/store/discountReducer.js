import { ROOT_URL } from "../API/index";

const defaultState = {
  discounts: [],
};

const RENDER_DISCOUNT = "RENDER_DISCOUNT";

export const discountReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "RENDER_DISCOUNT":
    
      return {
        ...state,
        discounts: state.discounts.filter(
          (products) => products.discont_price !== 0
        ),
      };
    default:
      return state;
  }
};

export const renderDiscountAction = (payload) => ({
  type: RENDER_DISCOUNT,
  payload,
});

