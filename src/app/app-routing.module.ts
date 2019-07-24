import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { AddEmployeeComponent } from 'src/app/add-employee/add-employee.component';
import { LoginComponent } from 'src/app/login/login.component';
import { LogoutComponent } from 'src/app/logout/logout.component';
import { AuthGuardService } from 'src/app/service/auth-guard.service';


const routes: Routes = [
  { path: '', component: EmployeeComponent, canActivate: [AuthGuardService] },
  { path: 'add', component: AddEmployeeComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
