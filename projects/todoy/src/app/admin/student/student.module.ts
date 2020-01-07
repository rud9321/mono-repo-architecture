import { NgModule } from '@angular/core';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { AddStudentComponent } from './add-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StudentComponent, AddStudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
