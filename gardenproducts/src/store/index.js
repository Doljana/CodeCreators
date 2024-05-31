import { createStore, combineReducers } from "redux";
import { categoriesReducer } from "./categoriesReducer";
import { discountReducer } from "./discountReducer";


const rootReducer = combineReducers({
  categories: categoriesReducer,
  discounts: discountReducer
});

export const store = createStore(rootReducer)