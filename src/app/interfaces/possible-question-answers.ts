import {PossibleAnswerValues} from './possible-answer-values';

export interface PossibleQuestionAnswers {
  textBefore: string;
  type: string;
  possibleAnswerValues: PossibleAnswerValues[];
}
