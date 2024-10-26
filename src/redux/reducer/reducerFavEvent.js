// reducers/favoriteReducer.js
import {TOGGLE_FAVORITE_EVENT} from './../action/actionTypes';

const initialState = {
  favorites: [],
};

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE_EVENT: {
      const {event, remove} = action.payload;

      if (remove) {
        return {
          ...state,
          favorites: state.favorites.filter(
            fav => fav.event_date_id !== event.event_date_id,
          ),
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, event],
        };
      }
    }
    default:
      return state;
  }
};
