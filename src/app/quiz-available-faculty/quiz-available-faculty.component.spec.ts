import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAvailableFacultyComponent } from './quiz-available-faculty.component';

describe('QuizAvailableFacultyComponent', () => {
  let component: QuizAvailableFacultyComponent;
  let fixture: ComponentFixture<QuizAvailableFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAvailableFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAvailableFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
