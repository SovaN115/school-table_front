import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsAddComponent } from './calls-add.component';

describe('CallsAddComponent', () => {
  let component: CallsAddComponent;
  let fixture: ComponentFixture<CallsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
