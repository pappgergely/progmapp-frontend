import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Eternalquiz} from '../interfaces/eternalquiz';
import {HttpClient} from '@angular/common/http';
import {EternalquizResponse} from '../interfaces/eternalquiz-response';
import {SearchEternalQuiz} from '../interfaces/search-eternal-quiz';
import {QuestionAssignToQuiz} from '../interfaces/question-assign-to-quiz';
import {QuizAssignToClass} from '../interfaces/quiz-assign-to-class';

@Injectable({
  providedIn: 'root'
})
export class EternalQuizService {

  private readonly SERVER_URL = environment.serverUrl + 'eternalquiz';
  private quizzez: BehaviorSubject<Eternalquiz[]>;
  private quizWithClass: BehaviorSubject<SearchEternalQuiz[]>;

  constructor(private http: HttpClient) {
    this.quizzez = new BehaviorSubject([]);
  }

  getQuiz(): BehaviorSubject<Eternalquiz[]> {
    this.http.get<EternalquizResponse>(this.SERVER_URL,
      {withCredentials: true})
      .subscribe(resp => {
        this.updateQuizzes(resp);
      });
    return this.quizzez;
  }

  private updateQuizzes(response: EternalquizResponse): void {
    if (response.success) {
      this.quizzez.next(response.quiz);
    }
  }

  addQuiz(q: Eternalquiz): void {
    this.http.post<EternalquizResponse>(
      this.SERVER_URL,
      {quiz: q},
      { withCredentials: true }
    ).subscribe(resp => this.updateQuizzes(resp));
  }

  getQuizWithClass(): BehaviorSubject<SearchEternalQuiz[]> {
    this.http.get<EternalquizResponse>(this.SERVER_URL,
      {withCredentials: true})
      .subscribe(resp => {
        this.updateQuizzes(resp);
      });
    return this.quizWithClass;
  }

  assignQuestionToQuiz(q: QuestionAssignToQuiz): void {
    this.http.put<EternalquizResponse>(this.SERVER_URL + '/quiz/question',
      {quiz: q},
      {withCredentials: true})
      .subscribe(resp => this.updateQuizzes(resp));
  }

  assignQuitToClass(q: QuizAssignToClass): void {
    this.http.put<EternalquizResponse>(this.SERVER_URL + '/quiz/class',
      {quiz: q},
      {withCredentials: true})
      .subscribe(resp => this.updateQuizzes(resp));
  }
}
