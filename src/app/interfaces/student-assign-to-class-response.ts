import {StudentAssignToClass} from './student-assign-to-class';

export interface StudentAssignToClassResponse {
  success: boolean;
  assignClass: StudentAssignToClass[];
}
