export interface QuizQuestion {
  id: string;
  text: string;
  explanationAfter: string;
  feedbackType: string;
  possibleAnswers: [
    {
      textBefore: string;
      type: string;
      possibleAnswerValues: [
        {
          text: string;
          isRightAnswer: boolean;
        }
      ]
    }
  ];
}
