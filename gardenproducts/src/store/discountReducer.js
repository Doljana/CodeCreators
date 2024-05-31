const defaultState = {
  categories: ROOT_URL + "categories/all",
};

const RENDER_DISCOUNT = "RENDER_CATEGORIES";

export const discountReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "RENDER_DISCOUNT":
      return { discount: state.discount + action.payload };

    default:
      return state;
  }
};

export const renderDiscountAction = (payload) => ({
  type: RENDER_DISCOUNT,
  payload,
});
