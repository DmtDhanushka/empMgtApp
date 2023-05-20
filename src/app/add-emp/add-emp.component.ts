import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {Skill} from '../skill';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../employee.service';
import {SkillService} from '../skill.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  const;
  emptyEmployee: Employee = {
    empId: 0,
    name: '',
    email: '',
    dob: '',
    owningSkills: []
  };

  employee: Employee = this.emptyEmployee;

  nameInput: string = undefined;
  emailInput: string = undefined;
  dobInput: string = undefined;
  dateControl = new FormControl(new Date());
  allSkillsLoaded: Skill[] = [];
  selectedSkills: Skill[] = [];
  skillFormControl = new FormControl([]);


  constructor(private route: ActivatedRoute,
              private empService: EmployeeService,
              private skillService: SkillService,
              private location: Location) {
  }

  ngOnInit() {
    this.getAllSkills();
  }

  goBack() {
    this.location.back();
  }


  addEmp() {
    this.employee.dob = this.convertDateFormat(this.dateControl.value.toLocaleDateString());
    this.employee.name = this.nameInput;
    this.employee.email = this.emailInput;
    this.employee.owningSkills = this.selectedSkills;

    const {empId, ...employeeObj} = this.employee;
    console.log('emp', employeeObj);
    this.empService.addEmployee(this.employee).subscribe(
      () => {
        console.log('Employee updated successfully');
        // Handle success case here
      },
      (error) => {
        console.log('Error updating employee:', error);
        // Handle error case here
      }
    );
    location.reload();
    this.location.back();
  }

  private getAllSkills() {
    this.skillService.getAllSkills().subscribe(e => {
      this.allSkillsLoaded = e;
      // this.allSkillsLoaded.forEach(skill => this.allSkillsStr.push(skill.label));
    });
  }

  formatDateString(date: string): Date {
    const [month, day, year] = date.split('/');
    return new Date(+year, +month - 1, +day);
  }

  convertDateFormat(dateString) {
    const dobString = dateString;
    const dobParts = dobString.split('/');
    const day = dobParts[0];
    const month = dobParts[1];
    const year = dobParts[2];

    const dob = new Date(`${year}-${month}-${day}`);

    const convertedDob = dob.toISOString().split('T')[0];
    return convertedDob;
  }
}
