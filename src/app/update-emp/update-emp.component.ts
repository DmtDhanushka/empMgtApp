import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../employee.service';
import {Location} from '@angular/common';
import {FormControl} from '@angular/forms';
import {SkillService} from '../skill.service';
import {Skill} from '../skill';
import {MatChip} from '@angular/material/chips';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

  employee: Employee = undefined;
  nameInput: string = undefined;
  emailInput: string = undefined;
  dobInput: string = undefined;
  dateControl = undefined;
  ownSkillsStr = [];
  allSkillsLoaded: Skill[] = [];
  allSkillsStr: string[] = [];

  selectedSkills: Skill[] = [];
  preSelectedSkills: Skill[] = [];

  toppings = new FormControl([]);

  constructor(private route: ActivatedRoute,
              private empService: EmployeeService,
              private skillService: SkillService,
              private location: Location) {
  }

  ngOnInit() {
    this.getEmployee();
    this.getAllSkills();
  }


  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.empService.getEmployee(id).subscribe(e => {
      this.employee = e[0];
      console.log(this.employee);
      this.nameInput = this.employee.name;
      this.emailInput = this.employee.email;
      this.dobInput = this.employee.dob;
      this.dateControl = new FormControl(new Date(this.employee.dob));
      // this.employee.owningSkills.forEach(skill => this.preSelectedSkills.push(skill));
      // this.selectedSkills = this.employee.owningSkills;
    });


    // this.selectedSkills = this.employee.owningSkills;
    // this.employee.owningSkills.forEach(skill => this.preSelectedSkills.push(skill));
  }

  goBack() {
    this.location.back();
  }

  updateEmp() {
    this.employee.name = this.nameInput;
    this.employee.email = this.emailInput;
    console.log(this.dateControl.value.toLocaleDateString('en-US'));
    this.employee.dob = this.dateControl.value.toLocaleDateString();

    console.log(this.selectedSkills);

    // this.location.back();
  }

  formatDateString(date: string): Date {
    const [month, day, year] = date.split('/');
    return new Date(+year, +month - 1, +day);
  }


  private getAllSkills() {
    this.skillService.getAllSkills().subscribe(e => {
      this.allSkillsLoaded = e;
      // this.allSkillsLoaded.forEach(skill => this.allSkillsStr.push(skill.label));
    });
  }

  receiveSelectedChipsData(selectedChips: string[]): void {
    // Handle the received selected chips data
    console.log('event', selectedChips);
    // Update any necessary properties or perform any actions based on the received data
  }


}
