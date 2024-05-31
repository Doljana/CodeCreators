

const defaultState = {
  categories: ROOT_URL + "categories/all",
};

const RENDER_CATEGORIES = "RENDER_CATEGORIES"

export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "RENDER_CATEGORIES":
      return { categories: state.categories + action.payload };

    default:
      return state;
  }
};

export const renderCategoriesAction = (payload) => ({
  type: RENDER_CATEGORIES,
  payload,
});

export default categoriesReducer;