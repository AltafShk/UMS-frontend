import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefacultyCardComponent } from './coursefaculty-card.component';

describe('CoursefacultyCardComponent', () => {
  let component: CoursefacultyCardComponent;
  let fixture: ComponentFixture<CoursefacultyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursefacultyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursefacultyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
