import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from "@angular-redux/store/lib/src";
import { IAppState } from "src/app/store";
import { ITodo } from "src/app/todo";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "src/app/actions";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

@select() todos;
model: ITodo = {
  id: 0,
  description: "",
  responsible: "",
  priority: "",
  isCompleted: false
}

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

onSubmit() {
  this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
}

toggleTodo(todo) {
  this.ngRedux.dispatch({type: TOGGLE_TODO, id: todo.id});
}

removeTodo(todo) {
  this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id});
}

}
