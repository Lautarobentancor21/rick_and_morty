import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./types";
import axios from "axios";

export const addFavorites = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      if (!data.length) throw new Error("No hay favoritos");
      return dispatch({
        type: ADD_FAVORITES,
        payload: data,
      });
    } catch (error) {
      return console.log(error.message);
    }
  };
};

export const deleteFavorites = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);

      return dispatch({
        type: DELETE_FAVORITES,
        payload: data,
      });
    } catch (error) {
      return console.log(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
