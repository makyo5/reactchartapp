import { DECREMENT_COUNTER } from '../actions';

export function counter(state = 0, action) {
  switch (action.type) {
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}