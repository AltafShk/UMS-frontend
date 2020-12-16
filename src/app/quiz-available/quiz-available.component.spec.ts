import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAvailableComponent } from './quiz-available.component';

describe('QuizAvailableComponent', () => {
  let component: QuizAvailableComponent;
  let fixture: ComponentFixture<QuizAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
