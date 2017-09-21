export const SAVE_ACTUAL_QUESTION_ID = 'SAVE_ACTUAL_QUESTION_ID';

export const SaveActualQuestionID = (ID) => {
  return {
    type: SAVE_ACTUAL_QUESTION_ID,
    payload: ID,
  };
};
