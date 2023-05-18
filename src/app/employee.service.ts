import {Injectable} from '@angular/core';
import {EMPLOYEES} from './EMPLOYEES';
import {Employee} from './employee';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  httpOptions = {
    headers: new HttpHeaders(({'Content-Type': 'application/json'}))
  };

  constructor(private http: HttpClient) {
  }

  // getEmployees(): Observable<Employee[]> {
  //   return of(EMPLOYEES);
  // }

  // @ts-ignore
  getEmployees(): Observable<Employee[]> {
    const url = 'http://localhost:8080/employee/getEmployees';
    // const response = this.http.get<Employee[]>(url);
    // this.http.get<Employee[]>(url)
    //   .subscribe(
    //     // tslint:disable-next-line:no-shadowed-variable
    //     (response: Employee[]) => {
    //       // console.log(response);
    //       return response;
    //     },
    //     (error) => {
    //       console.log('Error:', error);
    //     }
    //   );
    return this.http.get<Employee[]>(url);
  }


  getEmployee(id: number): Employee {
    return EMPLOYEES.find((e) => e.empId === id);
  }

}
