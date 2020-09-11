import {Roles} from '../enum/roles.enum';

export interface User {
  id?: number;
  name: string;
  password?: string;
  email?: string;
  phoneNumber?: number;
  address?: string;
  role?: Roles;
  token?: string;
}
