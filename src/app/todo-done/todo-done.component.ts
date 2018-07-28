import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from './../todo.service';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-done',
  templateUrl: './todo-done.component.html',
  styleUrls: ['./todo-done.component.css']
})
export class TodoDoneComponent implements OnInit {

  @Input() todo: Todo;
  todos: Todo[];
  constructor(
    private todoService: TodoService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTodo();
  }
  getTodo(): void{
    const id =+ this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(id).subscribe(todo=>this.todo=todo);
    //this.todo.matter=this.todo.matter+' DONE!!';
  }
  goBack(): void{
    this.location.back();
  }
  OK(): void{
    /*matter=matter.trim()+' DONE!!';
    if(!matter) { return }
    this.todoService.addTodo({matter} as Todo)
    .subscribe(todo=>{
      this.todos.push(todo);
    });*/
    this.todoService.updateTodo(this.todo).subscribe(()=>this.goBack());
  }
  append=function(){
    this.todo.matter=this.todo.matter+' DONE!!';
  }
}
