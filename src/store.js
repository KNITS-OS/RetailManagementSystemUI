import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import allReducers from "reducers";

const middleware = [thunk];

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(...middleware, logger)),
);

export default store;
