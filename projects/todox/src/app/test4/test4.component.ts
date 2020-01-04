import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'todox-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component {

  constructor(private fb: FormBuilder) {

  }

  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      zipCode: ['']
    })
  });
  get username() {
    return this.registerForm.get('username');
  }
  // registerForm = new FormGroup({
  //   username : new FormControl('Rudra'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl('Delhi'),
  //     state: new FormControl(''),
  //     zipCode: new FormControl('')
  //   })
  // });

  loadApiData() {
    this.registerForm.patchValue({ // patchValue or setValue
      username: 'Rudra Pratap Singh',
      password: '123',
      confirmPassword: '123',
      // address: {
      //   city: 'Sydny',
      //   state: 'Somewhere in Australia',
      //   zipCode: '45343'
      // }
    });
  }

  submitUserDetails() {
    console.log(this.registerForm.value);
    alert('form Submitted!');
  }

}
