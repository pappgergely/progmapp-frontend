export interface PossibleAnswerValues {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  lastModifiedBy?: string;
  text: string;
  isRightAnswer: boolean;
  rightOrder?: boolean;
}
