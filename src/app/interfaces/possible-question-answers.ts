import {PossibleAnswerValues} from './possible-answer-values';
import {AnswerType} from '../enum/question-type.enum';

export interface PossibleQuestionAnswers {
  textBefore: string;
  type: AnswerType;
  possibleAnswerValues: PossibleAnswerValues[];
}
