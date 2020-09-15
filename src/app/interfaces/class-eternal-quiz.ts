export interface ClassEternalQuiz {
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
