import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../employee.service';
import {Location} from '@angular/common';
import {Employee} from '../employee';

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
    this.employee = this.empService.getEmployee(id);
  }

  goBack() {
    this.location.back();
  }

  protected readonly undefined = undefined;
}
