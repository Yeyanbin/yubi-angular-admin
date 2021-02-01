import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YmapComponent } from './ymap.component';

describe('YmapComponent', () => {
  let component: YmapComponent;
  let fixture: ComponentFixture<YmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
