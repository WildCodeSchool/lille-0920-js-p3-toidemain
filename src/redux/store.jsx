import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import DateReducers from "./reducers/DateReducers";
import GalleryReducers from "./reducers/GalleryReducers";
import LoginReducer from "./reducers/LoginReducer";

const reducer = combineReducers({
  datesList: DateReducers,
  galleriesList: GalleryReducers,
  user: LoginReducer,
});

const middleware = [thunk];

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
