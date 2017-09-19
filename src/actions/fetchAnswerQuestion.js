export const FETCH_ANSWER_QUESTION = 'FETCH_ANSWER_QUESTION';

export const FetchAnswerQuestion = (Answer) => {
  return {
    type: FETCH_ANSWER_QUESTION,
    payload: Answer,
  };
};
