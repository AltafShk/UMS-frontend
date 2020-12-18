import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefacultyquizzesComponent } from './coursefacultyquizzes.component';

describe('CoursefacultyquizzesComponent', () => {
  let component: CoursefacultyquizzesComponent;
  let fixture: ComponentFixture<CoursefacultyquizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursefacultyquizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursefacultyquizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
