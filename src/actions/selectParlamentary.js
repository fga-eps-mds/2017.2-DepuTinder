export const SELECT_PARLAMENTARY = 'SELECT_PARLAMENTARY';

export const selectParlamentary = (deputy) => {
  const data = deputy;
  return {
    type: SELECT_PARLAMENTARY,
    payload: data,
  };
};
