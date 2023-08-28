import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsEditComponent } from './calls-edit.component';

describe('CallsEditComponent', () => {
  let component: CallsEditComponent;
  let fixture: ComponentFixture<CallsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
