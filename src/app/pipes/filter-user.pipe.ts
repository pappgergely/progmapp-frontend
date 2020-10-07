import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../interfaces/user';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(list: User[], value: string): User[] {
    if (value !== '' && list.length > 0) {
      return  list.filter((user) => user.name.search(new RegExp(value, 'i')) >= 0);
    } else {
      return list;
    }
  }
}
