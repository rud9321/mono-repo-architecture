import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todor-products',
  template: `
    <h3>Products</h3>
    <router-outlet></router-outlet>
  `
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
