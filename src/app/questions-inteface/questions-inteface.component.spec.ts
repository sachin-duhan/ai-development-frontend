import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsIntefaceComponent } from './questions-inteface.component';

describe('QuestionsIntefaceComponent', () => {
  let component: QuestionsIntefaceComponent;
  let fixture: ComponentFixture<QuestionsIntefaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsIntefaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsIntefaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
