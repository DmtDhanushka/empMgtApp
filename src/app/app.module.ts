import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatGridListModule,
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
  MatButtonModule,
  MatLineModule,
  MatListModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule
} from '@angular/material';
import {EmployeeMgtComponent} from './employee-mgt/employee-mgt.component';
import {SkillMgtComponent} from './skill-mgt/skill-mgt.component';
import {AppRoutingModule} from './app-routing.module';
import {EmpItemComponent} from './emp-item/emp-item.component';
import {UpdateEmpComponent} from './update-emp/update-emp.component';
import {EmpProfileComponent} from './emp-profile/emp-profile.component';
import {FormsModule} from '@angular/forms';
import { AddEmpComponent } from './add-emp/add-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeMgtComponent,
    SkillMgtComponent,
    EmpItemComponent,
    UpdateEmpComponent,
    EmpProfileComponent,
    AddEmpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatChipsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
