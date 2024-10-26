import {ADD_USER} from './actionTypes';

const ActionLogin = (email, password, name) => {
  try {
    return async dispatch => {
      if ((email, password, name)) {
        dispatch({
          type: ADD_USER,
          payload: {email, password, name},
        });
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export default ActionLogin;
