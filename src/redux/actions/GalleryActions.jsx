import {
  GET_GALLERIES,
  ADD_GALLERY,
  DELETE_GALLERY,
  GALLERIES_ERROR,
  SET_LOADING,
} from "../types";
import axios from "axios";

export const getGalleries = () => async (dispatch) => {
  try {
    setLoading();

    const { data } = await axios.get("/galleries");

    dispatch({
      type: GET_GALLERIES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GALLERIES_ERROR,
      payload: err.response,
    });
  }
};

export const AddGallery = (newGallery) => async (dispatch) => {
  try {
    setLoading();

    const { data } = await axios.post("/galleries", newGallery);

    dispatch({
      type: ADD_GALLERY,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GALLERIES_ERROR,
      payload: err.response,
    });
  }
};

export const deleteGallery = (id) => async (dispatch) => {
  try {
    setLoading();

    await axios.delete(`/galleries/${id}`);

    dispatch({
      type: DELETE_GALLERY,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: GALLERIES_ERROR,
      payload: err.response,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
