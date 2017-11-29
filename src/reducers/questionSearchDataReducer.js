import { FETCH_QUESTION_DATA } from '../actions/fetchQuestionData';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_QUESTION_DATA:
      return action.payload.data.map((quest) => {
        return [
          quest.questionTitle,
          {
            questionTitle: quest.questionTitle,
            questionSubtitle: quest.questionSubtitle,
            questionDescription: quest.questionDescription,
            questionAuthor: quest.questionAuthor,
            questionProposition: quest.proposition,
            questionQuestionnaire: quest.questionnaire,
          },
        ];
      });
    default:
      return state;
  }
}
