import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefacultyhomeComponent } from './coursefacultyhome.component';

describe('CoursefacultyhomeComponent', () => {
  let component: CoursefacultyhomeComponent;
  let fixture: ComponentFixture<CoursefacultyhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursefacultyhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursefacultyhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
