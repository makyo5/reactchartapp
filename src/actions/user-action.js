export const USER_LOGIN_IN = 'USER_LOGIN_IN';
export const USER_LOGIN_OUT = 'USER_LOGIN_OUT';

// export function decrement() {
//   return {
//     type: DECREMENT_COUNTER
//   }
// }
// export function increment() {
//   return {
//     type: INCREMENT_COUNTER
//   }
// }

export const userLoginIn = () => {
  return {
    type: USER_LOGIN_IN,
    text: "user is login in now"
  }
}

export const userLoginOut = () => {
  return {
    type: USER_LOGIN_OUT,
    text: "user login out now"
  }
}