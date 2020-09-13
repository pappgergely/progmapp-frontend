import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quizQuestion'
})
export class QuizQuestionPipe implements PipeTransform {

  transform(value: any, list: any): any {
    if (value !== null && list !== null) {
      const filteredQuizQuestion = value.filter( (quizQuestionName) => quizQuestionName.name.search(new RegExp(list, 'i')) >= 0);
      if (filteredQuizQuestion !== 0) {
        return filteredQuizQuestion;
      }
    }
    else {
      return value;
    }
  }

}
