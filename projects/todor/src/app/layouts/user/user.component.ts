import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todor-user',
  template: `
    <router-outlet></router-outlet>
  `
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
