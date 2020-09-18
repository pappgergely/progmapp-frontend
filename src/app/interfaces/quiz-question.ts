import {PossibleQuiestionAnswers} from './possible-quiestion-answers';

export interface QuizQuestion {
  id: string;
  text: string;
  explanationAfter: string;
  feedbackType: string;
  possibleAnswers: PossibleQuiestionAnswers[];
}
