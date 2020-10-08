import { Pipe, PipeTransform } from '@angular/core';
import {ClassEternalQuiz} from '../interfaces/class-eternal-quiz';

@Pipe({
  name: 'filterClassQuiz'
})
export class FilterClassQuizPipe implements PipeTransform {

  transform(list: ClassEternalQuiz[], value: string): ClassEternalQuiz[] {
    if (value !== '' && list.length > 0){
      return list.filter((quiz) => quiz.id.search(new RegExp(value, 'i')) >= 0);
    } else {
      return list;
    }
  }

}
