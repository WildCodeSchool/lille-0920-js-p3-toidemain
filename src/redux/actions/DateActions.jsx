import {
  GET_DATES,
  ADD_DATE,
  DELETE_DATE,
  UPDATE_DATE,
  SET_LOADING,
  DATES_ERROR,
  CLEAR_CURRENT,
  SET_CURRENT,
} from "../types.jsx";
const { backendApi, api } = require("../../conf");

export const getDates = () => async (dispatch) => {
  try {
    setLoading();
    const { data } = await api.get(`${backendApi}/auth/ateliers`);

    dispatch({
      type: GET_DATES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: DATES_ERROR,
      payload: err.response,
    });
  }
};

export const AddDate = (newAtelier) => async (dispatch) => {
  try {
    setLoading();

    const { data } = await api.post(`${backendApi}/auth/ateliers`, newAtelier);

    dispatch({
      type: ADD_DATE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: DATES_ERROR,
      payload: err.response,
    });
  }
};

export const deleteDate = (id) => async (dispatch) => {
  try {
    setLoading();

    await api.delete(`${backendApi}/auth/ateliers/${id}`);

    dispatch({
      type: DELETE_DATE,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: DATES_ERROR,
      payload: err.response,
    });
  }
};

export const updateDate = (updDate) => async (dispatch) => {
  try {
    setLoading();

    const { data } = await api.put(
      `${backendApi}/auth/ateliers/${updDate.id}`,
      updDate
    );

    dispatch({
      type: UPDATE_DATE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: DATES_ERROR,
      payload: err.response,
    });
  }
};

export const setCurrent = (info) => {
  return {
    type: SET_CURRENT,
    payload: info,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
