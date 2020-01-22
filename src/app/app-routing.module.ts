//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule) },
  { path: 'profile', loadChildren: () => import(`./profile/profile.module`).then(m => m.ProfileModule) },
  { path: 'attendance', loadChildren: () => import(`./attendance/attendance.module`).then(m => m.AttendanceModule) },
  { path: 'leaves', loadChildren: () => import(`./leaves/leaves.module`).then(m => m.LeavesModule) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', loadChildren: () => import(`./page404/page404.module`).then(m => m.Page404Module) },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { } 