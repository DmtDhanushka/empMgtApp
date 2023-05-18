import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule, Routes} from '@angular/router';
import {EmployeeMgtComponent} from './employee-mgt/employee-mgt.component';
import {SkillMgtComponent} from './skill-mgt/skill-mgt.component';
import {EmpProfileComponent} from './emp-profile/emp-profile.component';
import {UpdateEmpComponent} from './update-emp/update-emp.component';
import {AddEmpComponent} from './add-emp/add-emp.component';

const routes: Routes = [
  {path: 'emps', component: EmployeeMgtComponent},
  {path: 'skills', component: SkillMgtComponent},
  {path: '', redirectTo: '/emps', pathMatch: 'full'},
  {path: 'emp/:id', component: EmpProfileComponent},
  {path: 'emp/update/:id', component: UpdateEmpComponent},
  {path: 'addEmp', component: AddEmpComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
