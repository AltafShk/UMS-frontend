import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFacultyDescComponent } from './quiz-faculty-desc.component';

describe('QuizFacultyDescComponent', () => {
  let component: QuizFacultyDescComponent;
  let fixture: ComponentFixture<QuizFacultyDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizFacultyDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizFacultyDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
