import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { IPosts } from '../posts';

@Component({
  selector: 'todox-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(private _dataService: DataService) { }
  name = 'jhgjghjg';
  arrayofColors: Array<string> = this._dataService.doSomething();
  listofPosts: IPosts[];


  // @Input("parentkey") public parentkeyValue;
  // @Output() public childEvent = new EventEmitter();

  public testdata = 'Hey this is test parent data!';
  ngOnInit() {
    this._dataService.getPosts().subscribe(_ => this.listofPosts = _);
  }
  clickSomething(value) {
     console.log(value.value);
    // this.childEvent.emit(this.arrayofColors);
  }
}
