import { Pipe, PipeTransform } from '@angular/core';
import {Eternalquiz} from '../interfaces/eternalquiz';

@Pipe({
  name: 'filterQuiz'
})
export class FilterQuizPipe implements PipeTransform {

  transform(list: Eternalquiz[], value: string): Eternalquiz[] {
    if (value !== '' && list.length > 0) {
      return list.filter((quiz) => quiz.id.search(new RegExp(value, 'i')) >= 0);
    } else {
      return list;
    }
  }

}
