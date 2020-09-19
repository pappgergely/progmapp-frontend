import {Roles} from '../enum/roles.enum';
import {Class} from './class';

export interface Student {
  name: string;
  loginName: string;
  emailAddress: string;
  password: string;
  roles: Roles[];
  classes: Class[];
}
