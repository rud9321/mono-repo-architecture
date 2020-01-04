import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';

@Component({
  selector: 'todox-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  user;
  submitted = false;
  constructor(private _service: DataService) {
  }
  ngOnInit() {
     this.user = new User('', 'rud9321@gmail.com', 'Computer', 'this is message');
    console.log(this.user);
  }
  doSubmit() {
    this.submitted = true;
    this._service.postUserDetail(this.user)
    .subscribe(result => console.log(result), error => console.log(error));
    // console.log(this.user);
    alert('form Submitted!');
  }
}
