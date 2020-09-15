import { Component, OnInit } from '@angular/core';
import {SearchEternalQuiz} from '../../interfaces/search-eternal-quiz';
import {Subscription} from 'rxjs';
import {EternalQuizService} from '../../services/eternal-quiz.service';

@Component({
  selector: 'app-teacher-class-page',
  templateUrl: './teacher-class-page.component.html',
  styleUrls: ['./teacher-class-page.component.scss']
})
export class TeacherClassPageComponent implements OnInit {

  filter: string;
  quizWithClass: SearchEternalQuiz[];
  classSubscription: Subscription;

  constructor(private classwithQuizService: EternalQuizService) {
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
