import {Component, OnInit} from '@angular/core';
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
    });
  }

  goBack() {
    this.location.back();
  }
}
