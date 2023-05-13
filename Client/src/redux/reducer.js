import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER,
  ORDER,
} from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case DELETE_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
      };
    case FILTER:
      const allFavoriteCopy = [...state.allCharacters];
      const filteredGender = allFavoriteCopy.filter(
        (character) => character.gender === action.payload
      );
      
      return {
        ...state,
        myFavorites:
          action.payload === "allCharacters"
            ? [...state.allCharacters]
            : filteredGender,
      };
    case ORDER:
      const allCharactersCopy = [...state.myFavorites];
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? allCharactersCopy.sort((char1, char2) => char1.id - char2.id)
            : allCharactersCopy.sort((char1, char2) => char2.id - char1.id),
      };
    default:
      return state;
  }
};

export default rootReducer;
