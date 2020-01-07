import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentModule } from './student/student.module';
import { AddStudentComponent } from './student/add-student.component';
import { AdminAuthResolverService } from './admin-auth-resolver.service';

const routes: Routes = [
  {path: '', component: StudentComponent},
  {path: 'add-student', component: AddStudentComponent,
  resolve: {
    admin: AdminAuthResolverService
  }
}
];
// const routes: Routes = [
//   {path: 'admin',
//   loadChildren: './admin/admin.module#AdminModule'}
//   // loadChildren: () => import('./student/student.module').then(_ => _.StudentModule)}
// ];

@NgModule({
  imports: [RouterModule.forChild(routes), StudentModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
