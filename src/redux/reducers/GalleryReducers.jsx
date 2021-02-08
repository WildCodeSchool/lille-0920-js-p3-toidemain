import {
  GET_GALLERIES,
  ADD_GALLERY,
  DELETE_GALLERY,
  GALLERIES_ERROR,
  SET_LOADING,
} from "../types";

const initialState = {
  galleries: [],
  loading: false,
  error: null,
};

const GalleryReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_GALLERIES:
      return {
        ...state,
        galleries: action.payload,
        loading: false,
      };
    case ADD_GALLERY:
      return {
        ...state,
        galleries: [...state.galleries, action.payload],
        loading: false,
      };
    case DELETE_GALLERY:
      return {
        ...state,
        galleries: state.galleries.filter(
          (gallery) => gallery.id !== action.payload
        ),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GALLERIES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default GalleryReducers;
