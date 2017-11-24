export const SELECT_QUESTION = 'SELECT_QUESTION';

export const selectQuestion = (quest) => {
  const data = quest;
  return {
    type: SELECT_QUESTION,
    payload: data,
  };
};
