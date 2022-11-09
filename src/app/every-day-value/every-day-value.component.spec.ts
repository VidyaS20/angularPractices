import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveryDayValueComponent } from './every-day-value.component';

describe('EveryDayValueComponent', () => {
  let component: EveryDayValueComponent;
  let fixture: ComponentFixture<EveryDayValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveryDayValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveryDayValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
