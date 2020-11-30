import {PossibleQuestionAnswers} from './possible-question-answers';
import {FeedbackType} from '../enum/feedback-type.enum';

export interface QuizQuestion {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  lastModifiedBy: string;
  text: string;
  adminDescription: string;
  explanationAfter: string;
  answerTimeInSec: Date;
  evaluationAlogrithm: string;
  feedbackType: FeedbackType;
  hasImage: FormData;
  possibleAnswers: PossibleQuestionAnswers[];
}
