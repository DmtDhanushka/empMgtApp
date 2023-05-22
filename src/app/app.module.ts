import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {EmployeeMgtComponent} from './employee-mgt/employee-mgt.component';
import {SkillMgtComponent} from './skill-mgt/skill-mgt.component';
import {AppRoutingModule} from './app-routing.module';
import {UpdateEmpComponent} from './update-emp/update-emp.component';
import {EmpProfileComponent} from './emp-profile/emp-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddEmpComponent} from './add-emp/add-emp.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeMgtComponent,
    SkillMgtComponent,
    UpdateEmpComponent,
    EmpProfileComponent,
    AddEmpComponent,
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
    ReactiveFormsModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
