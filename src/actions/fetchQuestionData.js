export const FETCH_QUESTION_DATA = 'FETCH_QUESTION_DATA';

export function fetchQuestionData(answeredQuestions, Question) {
  answeredQuestions.append(Question);

  return {
    type: FETCH_QUESTION_DATA,
    payload: answeredQuestions,
  };
}
