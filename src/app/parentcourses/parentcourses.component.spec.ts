import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcoursesComponent } from './parentcourses.component';

describe('ParentcoursesComponent', () => {
  let component: ParentcoursesComponent;
  let fixture: ComponentFixture<ParentcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
