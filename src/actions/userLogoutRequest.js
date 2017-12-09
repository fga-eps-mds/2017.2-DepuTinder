export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';

export const userLogoutRequest = () => {
  localStorage.clear();
  return {
    type: USER_LOGOUT_REQUEST,
    payload: {},
  };
};
