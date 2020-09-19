import {Component, OnInit} from '@angular/core';
import {QuizQuestionService} from '../../services/quiz-question.service';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {PossibleAnswerValues} from '../../interfaces/possible-answer-values';
import {PossibleQuiestionAnswers} from '../../interfaces/possible-quiestion-answers';

@Component({
  selector: 'app-new-quiz-question-modal',
  templateUrl: './new-quiz-question-modal.component.html',
  styleUrls: ['./new-quiz-question-modal.component.scss']
})
export class NewQuizQuestionModalComponent implements OnInit {

  textShow: boolean;
  question: QuizQuestion;

  constructor(private quizQuestionService: QuizQuestionService) {
    this.question = {
      id: '',
      text: '',
      explanationAfter: '',
      feedbackType: '',
      possibleAnswers: [],
    };
  }

  options = {
    placeholderText: 'Kérdés szövege...',
    charCounterCount: false,
    attribution: false
  };

  ngOnInit(): void {
  }

  saveQuizQuestion(): void {
    this.quizQuestionService.addQuizQuestion(this.question);
    this.textShow = true;
    window.scroll(0, 0);
  }
}
