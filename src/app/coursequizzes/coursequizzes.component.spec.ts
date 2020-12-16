import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursequizzesComponent } from './coursequizzes.component';

describe('CoursequizzesComponent', () => {
  let component: CoursequizzesComponent;
  let fixture: ComponentFixture<CoursequizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursequizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursequizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
