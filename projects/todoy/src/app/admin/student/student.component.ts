import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todoy-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  clicked = true;
  constructor() { }

  ngOnInit() {
  }
  ClickMe() {
    if (this.clicked) {
      this.clicked = false;
    } else {
      this.clicked = true;
    }
  }
}
