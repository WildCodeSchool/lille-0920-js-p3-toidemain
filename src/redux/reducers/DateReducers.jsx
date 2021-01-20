import { GET_DATES, ADD_DATE, DELETE_DATE, UPDATE_DATE, SET_LOADING, DATES_ERROR } from '../types';

const initialState = {
  dates: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATES:
      return {
        ...state,
        dates: action.payload,
        loading: false,
      };
    case ADD_DATE:
      return {
        ...state,
        dates: [...state.dates, action.payload],
        loading: false,
      };
    case DELETE_DATE:
      return {
        ...state,
        notes: state.dates.filter((date) => date.id !== action.payload),
        loading: false,
      };
    case UPDATE_DATE:
      return {
        ...state,
        dates: state.dates.map((date) => (date.id === action.payload.id ? action.payload : date)),
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DATES_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
