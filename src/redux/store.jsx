import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import DateReducers from './reducers/DateReducers';

const reducer = combineReducers({
  datesList: DateReducers,
});

const middleware = [thunk];

const initialState = {};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
