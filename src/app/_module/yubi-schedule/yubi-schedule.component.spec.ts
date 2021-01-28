import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YubiScheduleComponent } from './yubi-schedule.component';

describe('YubiScheduleComponent', () => {
  let component: YubiScheduleComponent;
  let fixture: ComponentFixture<YubiScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YubiScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YubiScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
