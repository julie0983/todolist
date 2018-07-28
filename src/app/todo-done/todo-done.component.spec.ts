import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDoneComponent } from './todo-done.component';

describe('TodoDoneComponent', () => {
  let component: TodoDoneComponent;
  let fixture: ComponentFixture<TodoDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
