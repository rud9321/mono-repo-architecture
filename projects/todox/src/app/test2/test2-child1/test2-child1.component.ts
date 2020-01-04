import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { IPosts } from '../../posts';

@Component({
  selector: '[todox-test2-child1]',
  template: `
    <h2>
      test2-child1 works!
    </h2>
    <div class="list-group" *ngFor="let post of listData">
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{post.title}}</h5>
          <small>{{post.id}}</small>
        </div>
        <p class="mb-1">{{post.body}}</p>
        <small>{{post.userId}}</small>
      </a>
    </div>
  `,
  styles: []
})
export class Test2Child1Component implements OnInit {

  constructor(private _service: DataService) { }
  public listData: Array<IPosts>;
  ngOnInit() {
    this._service.getPosts().subscribe(list => this.listData = list);
  }

}
