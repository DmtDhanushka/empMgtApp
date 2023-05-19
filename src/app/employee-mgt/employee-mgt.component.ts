import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {EMPLOYEES} from '../EMPLOYEES';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-employee-mgt',
  templateUrl: './employee-mgt.component.html',
  styleUrls: ['./employee-mgt.component.css']
})
export class EmployeeMgtComponent implements OnInit {

  constructor(private empService: EmployeeService,
              private location: Location) {
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
      this.empService.deleteEmployee(emp.empId).subscribe(
        () => {
          console.log('Employee deleted successfully');
          location.reload();
          // Handle success case here
        },
        (error) => {
          console.log('Error deleting employee:', error);
          // Handle error case here
        }
      );
    }

  }

  goBack() {
    this.location.back();
  }


}
