import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDescComponent } from './quiz-desc.component';

describe('QuizDescComponent', () => {
  let component: QuizDescComponent;
  let fixture: ComponentFixture<QuizDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
