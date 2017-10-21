import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDiagramComponent } from './todo-diagram.component';

describe('TodoDiagramComponent', () => {
  let component: TodoDiagramComponent;
  let fixture: ComponentFixture<TodoDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
