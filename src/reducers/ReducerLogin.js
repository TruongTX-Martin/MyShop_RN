import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../actions/type';

const initialState = {
  data: null,
  isLoging: false,
  error: false
};

export default function reducerLogin(state = initialState, action) {
  console.log('reducer login');
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        data: [],
        isLoging: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoging: false,
        data: action.data
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoging: false,
        error: true
      };
    default:
      return state;
  }
}
