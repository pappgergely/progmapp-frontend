import { Pipe, PipeTransform } from '@angular/core';
import {Student} from '../interfaces/student';

@Pipe({
  name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {

  transform(list: Student[], value: string): Student[] {
    if (value !== '' && list.length > 0){
      return list.filter((student) => student.name.search(new RegExp(value, 'i')) >= 0);
    } else {
        return list;
    }
  }

}
