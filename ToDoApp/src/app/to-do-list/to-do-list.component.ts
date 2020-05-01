import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../Model/TodoModel';
import { DatePipe } from '@angular/common';
import { FormsModule} from '@angular/forms';  

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todomodel: TodoModel;
  showfull:boolean;
  constructor() { }
  todolist: TodoModel[] = new Array();
  ngOnInit(): void {
    this.showfull=false;
  }
  openAddtodoModal( ) {
    this.showfull=true;
    this.additems();
}
CancelItem()
{
  this.showfull=false;
}

saveItem()
{

  this.todolist.push(this.todomodel );
  this.showfull=false;
}
additems() {
  this.todomodel = new TodoModel();
  this.todomodel.TodoId =this.todolist.length+1;
  this.todomodel.IsActive = true;
}
}
