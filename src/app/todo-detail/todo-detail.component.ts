import { TodoService } from './../todo.service';
import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input() todo: Todo;

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
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    //this.todo=this.todo+' Done';
    this.todoService.updateTodo(this.todo).subscribe(()=>this.goBack());
  }

}
