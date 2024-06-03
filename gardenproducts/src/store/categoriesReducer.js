// import { ROOT_URL } from "../API/index.js";

import { getAllCategories } from "../API/index.js";




const defaultState = {
  categories: [],
};

const RENDER_CATEGORIES = "RENDER_CATEGORIES";

export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "RENDER_CATEGORIES":
      console.log(action.payload)
       return { categories: [...state.categories, ...action.payload] };

    default:
      return state;
  }
};

export const renderCategoriesAction = (payload) => ({
  type: RENDER_CATEGORIES,
  payload
});


