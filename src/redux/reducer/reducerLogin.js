import {ADD_USER} from './../action/actionTypes';
const initialState = {
  email: '',
  password: '',
  name: '',
};
export const reducerLogin = (state = initialState, action) => {
  const {type, payload} = action;
  console.log('payload for login', payload);
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        email: payload.email,
        password: payload.password,
        name: payload.name,
      };
    default:
      return state;
  }
};
