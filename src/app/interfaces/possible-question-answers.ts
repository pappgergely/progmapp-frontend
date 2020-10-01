import {PossibleAnswerValues} from './possible-answer-values';
import {QuestionType} from '../enum/question-type.enum';

export interface PossibleQuestionAnswers {
  textBefore: string;
  type: QuestionType;
  hasImage: number;
  possibleAnswerValues: PossibleAnswerValues[];
}
