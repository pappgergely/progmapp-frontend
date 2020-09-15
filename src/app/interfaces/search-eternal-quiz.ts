export interface SearchEternalQuiz {
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
