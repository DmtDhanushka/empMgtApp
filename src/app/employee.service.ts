import {Injectable} from '@angular/core';
import {EMPLOYEES} from './EMPLOYEES';
import {Employee} from './employee';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {
  }

  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);

  }

  getEmployee(id: number): Employee {
    return EMPLOYEES.find((e) => e.empId === id);
  }

}
