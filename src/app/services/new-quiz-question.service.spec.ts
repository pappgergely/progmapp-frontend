import { TestBed } from '@angular/core/testing';

import { NewQuizQuestionService } from './new-quiz-question.service';

describe('NewQuizQuestionService', () => {
  let service: NewQuizQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewQuizQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
