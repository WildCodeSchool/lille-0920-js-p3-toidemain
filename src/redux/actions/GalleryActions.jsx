import { GET_GALLERIES, ADD_GALLERY, DELETE_GALLERY, GALLERIES_ERROR, SET_LOADING } from '../types';
import axios from 'axios';

// GET Gallerries from server
export const getGalleries = () => async (dispatch) => {
  try {
    // const { data } = await axios.get('/dates');
    setLoading();

    const res = await fetch('/galleries');
    const data = await res.json();

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

// POST Gallerries from server
export const AddGallery = (newGallery) => async (dispatch) => {
  try {
    // const { data } = await axios.post('/dates');

    setLoading();

    const res = await fetch('/galleries', {
      method: 'POST',
      body: JSON.stringify(newGallery),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

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

// DELETE Gallerries from server
export const deleteGallery = (id) => async (dispatch) => {
  try {
    // await axios.delete(`/dates/${id}`);
    setLoading();

    await fetch(`/galleries/${id}`, {
      method: 'DELETE',
    });

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

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
