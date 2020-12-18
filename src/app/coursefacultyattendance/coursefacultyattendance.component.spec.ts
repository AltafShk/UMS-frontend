import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefacultyattendanceComponent } from './coursefacultyattendance.component';

describe('CoursefacultyattendanceComponent', () => {
  let component: CoursefacultyattendanceComponent;
  let fixture: ComponentFixture<CoursefacultyattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursefacultyattendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursefacultyattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
