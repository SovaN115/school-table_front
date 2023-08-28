import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLessonsComponent } from './admin-lessons.component';

describe('AdminLessonsComponent', () => {
  let component: AdminLessonsComponent;
  let fixture: ComponentFixture<AdminLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLessonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
