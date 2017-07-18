import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public addValue: string = '';

  constructor() { }

  ngOnInit() {
  }

  onAddTodo () {
    console.log(this.addValue);
  }

}
