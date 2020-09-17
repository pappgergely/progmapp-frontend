import {Component, OnInit} from '@angular/core';
import {QuizQuestionService} from '../../services/quiz-question.service';
import {QuizQuestion} from '../../interfaces/quiz-question';

@Component({
  selector: 'app-new-quiz-question-modal',
  templateUrl: './new-quiz-question-modal.component.html',
  styleUrls: ['./new-quiz-question-modal.component.scss']
})
export class NewQuizQuestionModalComponent implements OnInit {

  textShow: boolean;

  constructor(private quizQuestionService: QuizQuestionService) {
    this.quizQuestion = {
      id: '',
      text: '',
      explanationAfter: '',
      feedbackType: '',
      possibleAnswers: [
        {
          textBefore: '',
          type: '',
          possibleAnswerValues: [
            {
              text: '',
              isRightAnswer: false
            }
          ]
        }
      ]
    };
  }

  options = {
    placeholderText: 'Kérdés szövege...',
    charCounterCount: false,
    attribution: false
  };

  quizQuestion: QuizQuestion;

  ngOnInit(): void {
  }

  generateNewAnswer(): void {
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
      <input>

      <label><input type="checkbox"> Jó válasz</label>
      <input type="checkbox">
      <label>Rossz válasz</label>`;
    document.getElementsByClassName('answers')[0].appendChild(createDiv);
  }

  saveQuizQuestion(): void {
    this.quizQuestionService.addQuizQuestion(this.quizQuestion);
    this.textShow = true;
    window.scroll(0, 0);
  }
}
