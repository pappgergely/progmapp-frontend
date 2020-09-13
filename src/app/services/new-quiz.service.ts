import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {NewQuiz} from '../interfaces/new-quiz';
import {HttpClient} from '@angular/common/http';
import {QuizResponse} from '../interfaces/quiz-response';
import {QuizWithClass} from '../interfaces/quiz-with-class';

@Injectable({
  providedIn: 'root'
})
export class NewQuizService {

  private readonly SERVER_URL = environment.serverUrl + 'eternalquiz';
  private quizzez: BehaviorSubject<NewQuiz[]>;
  private quizWithClass: BehaviorSubject<QuizWithClass[]>;

  constructor(private http: HttpClient) {
    this.quizzez = new BehaviorSubject([]);
  }

  getQuiz(): BehaviorSubject<NewQuiz[]> {
    this.http.get<QuizResponse>(this.SERVER_URL,
      {withCredentials: true})
      .subscribe(resp => {
        this.updateQuizzes(resp);
      });
    return this.quizzez;
  }

  private updateQuizzes(response: QuizResponse): void {
    if (response.success) {
      this.quizzez.next(response.quiz);
    }
  }

  addQuiz(q: NewQuiz): void {
    this.http.post<QuizResponse>(
      this.SERVER_URL,
      {quiz: q},
      { withCredentials: true }
    ).subscribe(resp => this.updateQuizzes(resp));
  }

  getQuizWithClass(): BehaviorSubject<QuizWithClass[]> {
    this.http.get<QuizResponse>(this.SERVER_URL,
      {withCredentials: true})
      .subscribe(resp => {
        this.updateQuizzes(resp);
      });
    return this.quizWithClass;
  }
}
