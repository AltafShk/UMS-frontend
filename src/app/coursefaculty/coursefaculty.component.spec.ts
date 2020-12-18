import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefacultyComponent } from './coursefaculty.component';

describe('CoursefacultyComponent', () => {
  let component: CoursefacultyComponent;
  let fixture: ComponentFixture<CoursefacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursefacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursefacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
