import { GET_DATES, ADD_DATE, DELETE_DATE, UPDATE_DATE, SET_LOADING, DATES_ERROR, CLEAR_CURRENT, SET_CURRENT } from '../types';
import axios from 'axios';

export const getDates = () => async (dispatch) => {
  try {
    setLoading();
    const { data } = await axios.get('/dates');

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

export const AddDate = (newDate) => async (dispatch) => {
  try {
    setLoading();

    const { data } = await axios.post('/dates', newDate);

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

    await axios.delete(`/dates/${id}`);

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

    const { data } = await axios.put(`/dates/${updDate.id}`, updDate);

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
