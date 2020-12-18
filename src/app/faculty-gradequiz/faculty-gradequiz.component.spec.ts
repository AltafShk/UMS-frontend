import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyGradequizComponent } from './faculty-gradequiz.component';

describe('FacultyGradequizComponent', () => {
  let component: FacultyGradequizComponent;
  let fixture: ComponentFixture<FacultyGradequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyGradequizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyGradequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
