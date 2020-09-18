import {PossibleAnswerValues} from './possible-answer-values';

export interface PossibleQuiestionAnswers {
  textBefore: string;
  type: string;
  possibleAnswerValues: PossibleAnswerValues[];
}
