import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todor-admin',
  template: `
    <h3>Admin</h3>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
