import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultycoursesComponent } from './facultycourses.component';

describe('FacultycoursesComponent', () => {
  let component: FacultycoursesComponent;
  let fixture: ComponentFixture<FacultycoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultycoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultycoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
