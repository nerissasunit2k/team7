import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualAnalyticsComponent } from './anual-analytics.component';

describe('AnualAnalyticsComponent', () => {
  let component: AnualAnalyticsComponent;
  let fixture: ComponentFixture<AnualAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnualAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnualAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
