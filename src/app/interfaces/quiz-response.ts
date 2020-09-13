import {NewQuiz} from './new-quiz';

export interface QuizResponse {
  success: boolean;
  quiz: NewQuiz[];
}
