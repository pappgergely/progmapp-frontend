import { Component, OnInit } from '@angular/core';
import {NewQuiz} from '../../interfaces/new-quiz';
import {NewQuizService} from '../../services/new-quiz.service';

@Component({
  selector: 'app-new-foreverquiz-modal',
  templateUrl: './new-foreverquiz-modal.component.html',
  styleUrls: ['./new-foreverquiz-modal.component.scss']
})
export class NewForeverquizModalComponent implements OnInit {

  questions = [
    {id: 1, name: 'kérdés1'},
    {id: 2, name: 'kérdés2'},
  ];

  quiz: NewQuiz;
  textShow: boolean;

  public expanded = false;

  constructor(private quizService: NewQuizService) {
    this.quiz = {
      name: '',
      questionIds: '',
    };
  }

  ngOnInit(): void {
  }

  saveQuiz(): void {
    this.quizService.addQuiz(this.quiz);
    this.textShow = true;
    window.scroll(0, 0);
  }
}
