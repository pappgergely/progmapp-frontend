import {NewUser} from './new-user';

export interface NewUserResponse {
  success: boolean;
  user: NewUser[];
}
