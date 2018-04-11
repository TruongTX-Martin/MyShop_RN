import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './type';

export function login() {
  console.log('action login');
  return {
    type: LOGIN
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data
  };
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error
  };
}
