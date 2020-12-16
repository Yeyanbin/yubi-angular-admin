import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YubiFormComponent } from './yubi-form.component';

describe('YubiFormComponent', () => {
  let component: YubiFormComponent;
  let fixture: ComponentFixture<YubiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YubiFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YubiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
