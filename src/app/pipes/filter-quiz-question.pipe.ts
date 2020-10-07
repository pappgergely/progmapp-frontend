import { Pipe, PipeTransform } from '@angular/core';
import {QuizQuestion} from '../interfaces/quiz-question';

@Pipe({
  name: 'filterQuizQuestion'
})
export class FilterQuizQuestionPipe implements PipeTransform {

  transform(list: QuizQuestion[], value: string): QuizQuestion[] {
    if (value !== '' && list.length > 0) {
      return list.filter( (quizQuestion) => quizQuestion.text.search(new RegExp(value, 'i')) >= 0);
    } else {
      return list;
    }
  }

}
