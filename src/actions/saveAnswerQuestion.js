export const SAVE_ANSWER_QUESTION = 'SAVE_ANSWER_QUESTION';

export const SaveAnswerQuestion = (answeredQuestions, newAnswer) => {
  const answersLen = answeredQuestions.length;
  const newAnsweredQuestions = answeredQuestions;

  for (let i = 0; i < answersLen; i += 1) {
    if (answeredQuestions[i].answerID === newAnswer.answerID) {
      newAnsweredQuestions[i].answer = newAnswer.answer;
      return {
        type: SAVE_ANSWER_QUESTION,
        payload: newAnsweredQuestions,
      };
    }
  }

  answeredQuestions.push(newAnswer);
  return {
    type: SAVE_ANSWER_QUESTION,
    payload: answeredQuestions,
  };
};
