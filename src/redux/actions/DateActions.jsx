import { GET_DATES, ADD_DATE, DELETE_DATE, UPDATE_DATE, SET_LOADING, DATES_ERROR, CLEAR_CURRENT, SET_CURRENT } from '../types';
import axios from 'axios';

// GET Dates from server
export const getDates = () => async (dispatch) => {
  try {
    // const { data } = await axios.get('/dates');
    setLoading();

    const res = await fetch('/dates');
    const data = await res.json();

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

// POST Dates from server
export const AddDate = (newDate) => async (dispatch) => {
  try {
    // const { data } = await axios.post('/dates');

    setLoading();

    const res = await fetch('/dates', {
      method: 'POST',
      body: JSON.stringify(newDate),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

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

// DELETE Dates from server
export const deleteDate = (id) => async (dispatch) => {
  try {
    // await axios.delete(`/dates/${id}`);
    setLoading();

    await fetch(`/dates/${id}`, {
      method: 'DELETE',
    });

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

// PUT Date from server
export const updateDate = (updDate) => async (dispatch) => {
  try {
    // const { data } = await axios.put(`/dates/${updDate.id}`);
    setLoading();

    const res = await fetch(`/dates/${updDate.id}`, {
      method: 'PUT',
      body: JSON.stringify(updDate),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
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

//Set current note
export const setCurrent = (info) => {
  return {
    type: SET_CURRENT,
    payload: info,
  };
};

//Clear current note
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
