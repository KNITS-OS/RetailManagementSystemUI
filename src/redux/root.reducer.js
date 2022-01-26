import { combineReducers } from "redux";
import { productReducer } from "./products/product.reducer";

export const rootReducer = combineReducers({
  product: productReducer
});