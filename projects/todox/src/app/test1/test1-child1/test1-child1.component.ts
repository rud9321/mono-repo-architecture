import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todox-test1-child1',
  templateUrl: './test1-child1.component.html',
  styleUrls: ['./test1-child1.component.css']
})
export class Test1Child1Component implements OnInit {

  @Input() public test_parent_data = '';
  constructor() { }
  ngOnInit() {
  }

}
