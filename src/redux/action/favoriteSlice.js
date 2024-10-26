// actions/favoriteActions.js
import {TOGGLE_FAVORITE_EVENT} from './actionTypes';

export const ActionToggleFavoriteEvent = event => {
  return (dispatch, getState) => {
    const {favorites} = getState().favoriteReducer;

    const isFavorite = favorites.some(
      favEvent => favEvent.event_date_id === event.event_date_id,
    );

    if (isFavorite) {
      dispatch({
        type: TOGGLE_FAVORITE_EVENT,
        payload: {event, remove: true},
      });
    } else {
      dispatch({
        type: TOGGLE_FAVORITE_EVENT,
        payload: {event, remove: false},
      });
    }
  };
};
