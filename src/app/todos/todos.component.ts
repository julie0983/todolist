import { TodoService } from './../todo.service';
import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';
import { $ } from '../../../node_modules/protractor';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css',
              './done.todo.css']
})
export class TodosComponent implements OnInit {

  /*todo: Todo={
    matter:'Things to do'
  };*/
  @Input() todo: Todo;

  todos: Todo[];

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router,
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    this.getTodos();
  }
  getTodos(): void{
    this.todoService.getTodos().subscribe(todos=>this.todos=todos);
  }
  add(matter:string): void{
    matter=matter.trim();
    if(!matter) { return }
    this.todoService.addTodo({matter} as Todo)
    .subscribe(todo=>{
      this.todos.push(todo);
    });
  }
  delete(todo: Todo): void{
    this.todos=this.todos.filter(t=>t!==todo);
    this.todoService.deleteTodo(todo).subscribe();
  }
  done(event): void{
    if(event.target.checked)
    {
      /*let hElement:HTMLElement=this.elRef.nativeElement;
      let e=hElement.getElementsByClassName("ed") as HTMLCollectionOf<HTMLElement>;
      e[0].style.pointerEvents="none";*/
      //document.getElementById("edit1").style.pointerEvents="none";
      //localStorage.checked=true;
    }
    else
    {
      /*let e =document.getElementsByClassName("ed") as HTMLCollectionOf<HTMLElement>;
      e[0].style.pointerEvents="auto";*/
      //document.getElementById("edit1").style.pointerEvents="auto";
      //localStorage.checked=false;
    }
   }
   

}
