import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from "./categoriesReducer";
import { discountReducer } from "./discountReducer";


const rootReducer = combineReducers({
  categories: categoriesReducer,
  discounts: discountReducer
});

export const store = configureStore({ reducer: rootReducer, });