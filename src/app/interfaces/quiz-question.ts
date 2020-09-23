import {PossibleQuestionAnswers} from './possible-question-answers';

export interface QuizQuestion {
  id: string;
  text: string;
  explanationAfter: string;
  feedbackType: string;
  possibleAnswers: PossibleQuestionAnswers[];
}
