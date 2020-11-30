import {Class} from './class';
import {ErrorMsgResponse} from './error-msg-response';

export interface ClassResponse {
  successFullResult: boolean;
  class: Class[];
  errorMessages: ErrorMsgResponse[];
}
