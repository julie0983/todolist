import { TodoDoneComponent } from './todo-done/todo-done.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  { path: '', redirectTo:'/todos', pathMatch: 'full'},
  { path: 'detail/:id', component: TodoDetailComponent},
  { path: 'done/:id', component: TodoDoneComponent},
  { path: 'todos', component: TodosComponent}
];

@NgModule({
  imports:[ RouterModule.forRoot(routes)],
  exports:[ RouterModule ]
  /*imports: [
    CommonModule
  ],
  declarations: []*/
})
export class AppRoutingModule { }
