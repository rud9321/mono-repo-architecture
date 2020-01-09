import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AdminAuthResolverService } from 'projects/todoy/src/app/admin/admin-auth-resolver.service';
import { AuthGuard } from '../../auth/auth.guard';


export const AdminLayoutRoutes: Routes = [
//     { path: '',      component: DashboardComponent, canActivate: [AuthGuard] },
//     { path: 'user-profile',   component: UserProfileComponent
//     , resolve: {
//        admin: AdminAuthResolverService
//     },
//     canActivate: [AuthGuard]
// },
{
    path: '', component: DashboardComponent,
    children: [
        {
             path: 'tables', component: TablesComponent
        }
     ]
},
    { path: 'icons',          component: IconsComponent, canActivate: [AuthGuard] },
    { path: 'maps',           component: MapsComponent, canActivate: [AuthGuard] }
];

