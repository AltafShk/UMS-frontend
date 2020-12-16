import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseattendanceComponent } from './courseattendance.component';

describe('CourseattendanceComponent', () => {
  let component: CourseattendanceComponent;
  let fixture: ComponentFixture<CourseattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseattendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
