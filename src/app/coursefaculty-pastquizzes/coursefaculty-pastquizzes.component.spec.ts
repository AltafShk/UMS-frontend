import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefacultyPastquizzesComponent } from './coursefaculty-pastquizzes.component';

describe('CoursefacultyPastquizzesComponent', () => {
  let component: CoursefacultyPastquizzesComponent;
  let fixture: ComponentFixture<CoursefacultyPastquizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursefacultyPastquizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursefacultyPastquizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
