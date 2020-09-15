import { Component, OnInit } from '@angular/core';
import {Eternalquiz} from '../../interfaces/eternalquiz';
import {EternalQuizService} from '../../services/eternal-quiz.service';
import {QuestionAssignToQuiz} from '../../interfaces/question-assign-to-quiz';

@Component({
  selector: 'app-new-foreverquiz-modal',
  templateUrl: './new-eternalquiz-modal.component.html',
  styleUrls: ['./new-eternalquiz-modal.component.scss']
})
export class NewEternalquizModalComponent implements OnInit {

  questions = [
    {id: 1, name: 'kérdés1'},
    {id: 2, name: 'kérdés2'},
  ];

  quiz: Eternalquiz;
  textShow: boolean;
  quizWithQuestions: QuestionAssignToQuiz;

  public expanded = false;

  constructor(private quizService: EternalQuizService) {
    this.quiz = {
      id: '',
      questionIds: '',
    };
  }

  ngOnInit(): void {
  }

  saveQuiz(): void {
    this.quizService.assignQuestionToQuiz(this.quizWithQuestions);
    this.quizService.addQuiz(this.quiz);
    this.textShow = true;
    window.scroll(0, 0);
  }
}
