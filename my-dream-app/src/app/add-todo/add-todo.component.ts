import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Input() addTodoValue: string;

  constructor() { }

  ngOnInit() {
  }

}
