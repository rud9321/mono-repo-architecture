import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../data.service';
import { IPosts } from '../../posts';

@Component({
  selector: 'todox-test2-child2',
  template: `
    <h2>
      test2-child2 works!
    </h2>
    <button type="button" (click)="callit()" class="btn btn-secondary btn-sm">Child2</button>
  `,
  styles: []
})
export class Test2Child2Component implements OnInit {

  constructor(private _service: DataService) { }
  public listData: Array<IPosts>;
  @Output() public listDataEvent = new EventEmitter();
  ngOnInit() {
    this._service.getPosts().subscribe(list => this.listData = list);
  }

  callit() {
    this.listDataEvent.emit(this.listData);
  }



}
