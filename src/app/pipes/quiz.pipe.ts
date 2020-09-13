import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quiz'
})
export class QuizPipe implements PipeTransform {

  transform(value: any, list: any): any {
    if (value !== null && list !== null) {
      const filteredQuiz = value.filter( (quizName) => quizName.name.search(new RegExp(list, 'i')) >= 0);
      if (filteredQuiz !== 0) {
        return filteredQuiz;
      }
    }
    else {
      return value;
    }
  }

}
