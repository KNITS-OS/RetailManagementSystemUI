import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../src/redux/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)