import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'todoy-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  addStudentForm = this.fb.group({
    name: ['', Validators.required],
    age: [],
    address: []
  });

  ngOnInit() {
  }

  loadFormData() {
    this.addStudentForm.patchValue({
      name: 'Rudra'
    });
  }


}
