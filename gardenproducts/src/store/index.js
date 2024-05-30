import { createStore, combineReducers } from "redux";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { discountReducer } from "./reducers/discountReducer";


const rootReducer = combineReducers({
  categories: categoriesReducer,
  discounts: discountReducer
});

export const store = createStore(rootReducer)