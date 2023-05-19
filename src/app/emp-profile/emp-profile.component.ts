import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../employee.service';
import {Location} from '@angular/common';
import {Employee} from '../employee';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {

  // @Input() employee: Employee;
  employee: Employee = undefined;

  constructor(private route: ActivatedRoute,
              private empService: EmployeeService,
              private location: Location) {
  }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.empService.getEmployee(id).subscribe(e => {
      this.employee = e[0];
      console.log(this.employee);
      // this.employee.owningSkills.forEach(skill => this.preSelectedSkills.push(skill));
      // this.selectedSkills = this.employee.owningSkills;
    });


    // this.selectedSkills = this.employee.owningSkills;
    // this.employee.owningSkills.forEach(skill => this.preSelectedSkills.push(skill));
  }

  goBack() {
    this.location.back();
  }
}
