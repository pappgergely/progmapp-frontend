import {Roles} from '../enum/roles.enum';

export interface NewUser {
  name: string;
  loginName?: string;
  emailAddress: string;
  password?: string;
  roles: Roles;
}
