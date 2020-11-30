import {PossibleAnswerValues} from './possible-answer-values';
import {AnswerType} from '../enum/question-type.enum';

export interface PossibleQuestionAnswers {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  lastModifiedBy: string;
  textBefore: string;
  textAfter: string;
  type: AnswerType;
  possibleAnswerValues: PossibleAnswerValues[];
  hasImage: FormData;
  order: string;
  unitTestCode: string;
}
