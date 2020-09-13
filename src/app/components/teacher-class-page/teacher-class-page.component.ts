import { Component, OnInit } from '@angular/core';
import {QuizWithClass} from '../../interfaces/quiz-with-class';
import {Subscription} from 'rxjs';
import {NewQuizService} from '../../services/new-quiz.service';

@Component({
  selector: 'app-teacher-class-page',
  templateUrl: './teacher-class-page.component.html',
  styleUrls: ['./teacher-class-page.component.scss']
})
export class TeacherClassPageComponent implements OnInit {

  filter: string;
  quizWithClass: QuizWithClass[];
  classSubscription: Subscription;

  constructor(private classwithQuizService: NewQuizService) {
    this.quizWithClass = [];
  }

  ngOnInit(): void {
    this.classSubscription = this.classwithQuizService.getQuizWithClass().subscribe(
      classes => {
        this.quizWithClass = classes;
      }
    );
  }

}
