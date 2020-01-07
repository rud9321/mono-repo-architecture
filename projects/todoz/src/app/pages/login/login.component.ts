import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder, private router: Router) {}

  loginForm = this.fb.group({
    email: ['rud9321@gmail.com'],
    password: ['123']
  });
  ngOnInit() {
  }
  ngOnDestroy() {

  }
  formSubmit() {
    if (this.loginForm.value.email === 'rud9321@gmail.com' && this.loginForm.value.password === '1234') {
      sessionStorage.setItem('x-auth', 'JFSD87SD7F8S7FS879DF7S9D87F9S8F7');
      this.router.navigate( ['/admin'] );
    }  else {
      alert('you made it wrong!');
    }

  }
}
