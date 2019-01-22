import {
  USER_LOGIN_IN,
  USER_LOGIN_OUT
} from '../actions';

export function counter(state = [], action) {
  switch (action.type) {
    case USER_LOGIN_IN:
      return state = 100;
    case USER_LOGIN_OUT:
      return state = 0;
    default:
      return state;
  }
}
