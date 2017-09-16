export const FETCH_QUESTION_DATA = 'FETCH_QUESTION_DATA';

export function fetchQuestionData(Question) {
  return {
    type: FETCH_QUESTION_DATA,
    payload: Question,
  };
}
