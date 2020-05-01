import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../Model/TodoModel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }
  todolist: TodoModel[] = new Array();
  ngOnInit(): void {
  }

}
