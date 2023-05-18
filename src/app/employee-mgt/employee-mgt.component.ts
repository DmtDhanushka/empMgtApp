import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {EMPLOYEES} from '../EMPLOYEES';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-employee-mgt',
  templateUrl: './employee-mgt.component.html',
  styleUrls: ['./employee-mgt.component.css']
})
export class EmployeeMgtComponent implements OnInit {

  constructor(private empService: EmployeeService) {
  }

  employees = [];
  private searchTerms = new Subject<string>();

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.empService.getEmployees().subscribe(e => this.employees = e);
  }

  getInfo(emp: Employee): void {
    alert(emp.empId);
  }

  deleteEmp(emp: Employee): void {
    if (confirm('Are you sure?') === true) {
      this.employees = this.employees.filter((e) => e.id !== emp.empId);
    }


  }


}
