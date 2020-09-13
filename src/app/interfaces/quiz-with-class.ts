export interface QuizWithClass {
  id: string;
  schoolClasses: [
    {
      id: string;
      year: Date;
      semester: string;
      isActive: boolean;
    }
  ];
}
