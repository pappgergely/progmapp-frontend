import { Pipe, PipeTransform } from '@angular/core';
import {Class} from '../interfaces/class';

@Pipe({
  name: 'filterClass'
})
export class FilterClassPipe implements PipeTransform {

  transform(list: Class[], value: string): Class[] {
    if (value !== '' && list.length > 0) {
      return  list.filter((classes) => classes.id.search(new RegExp(value, 'i')) >= 0);
    } else {
      return list;
    }
  }
}
