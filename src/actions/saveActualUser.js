export const SAVE_ACTUAL_USER = 'SAVE_ACTUAL_USER';

export const saveActualUser = (email, name, image) => {
  const data = {
    userEmail: email,
    userName: name,
    userImage: image,
  };

  return {
    type: SAVE_ACTUAL_USER,
    payload: data,
  };
};
