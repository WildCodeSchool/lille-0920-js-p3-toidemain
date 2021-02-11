import {
  GET_GALLERIES,
  ADD_GALLERY,
  DELETE_GALLERY,
  GALLERIES_ERROR,
  SET_LOADING,
} from "../types.jsx";
const { backendApi, api } = require("../../conf");

export const getGalleries = () => async (dispatch) => {
  try {
    setLoading();

    const { data } = await api.get(`${backendApi}/auth/evenements`);

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

export const AddGallery = (newEvenement) => async (dispatch) => {
  try {
    setLoading();

    const { data } = await api.post(
      `${backendApi}/auth/evenements`,
      newEvenement
    );

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

    await api.delete(`${backendApi}/auth/evenements/${id}`);

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
