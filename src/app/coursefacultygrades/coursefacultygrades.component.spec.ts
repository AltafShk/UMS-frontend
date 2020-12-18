import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefacultygradesComponent } from './coursefacultygrades.component';

describe('CoursefacultygradesComponent', () => {
  let component: CoursefacultygradesComponent;
  let fixture: ComponentFixture<CoursefacultygradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursefacultygradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursefacultygradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
