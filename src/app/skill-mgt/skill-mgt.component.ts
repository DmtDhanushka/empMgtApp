import {Component, OnInit} from '@angular/core';
import {SkillService} from '../skill.service';
import {Skill} from '../skill';

@Component({
  selector: 'app-skill-mgt',
  templateUrl: './skill-mgt.component.html',
  styleUrls: ['./skill-mgt.component.css']
})
export class SkillMgtComponent implements OnInit {

  skills = [];
  newSkillInput: string = undefined;
  isSkillEditOpen: number = undefined;
  updatedSkillLabel = undefined;

  constructor(private skillService: SkillService) {
  }

  ngOnInit() {
    this.getSkills();
    console.log('skills', this.skills);
  }

  getSkills(): void {
    this.skillService.getAllSkills().subscribe(e => this.skills = e);
  }

  updateSkill(emp: any) {
    this.isSkillEditOpen = undefined;
    console.log(this.updatedSkillLabel);

    const skillObj: Skill = {skillId: emp.skillId, label: this.updatedSkillLabel};

    if (confirm('Are you sure you want to update skill label?') === true) {
      this.skillService.updateSkill(emp.skillId, skillObj).subscribe(
        () => {
          console.log('skill updated successfully');
          // Handle success case here
        },
        (error) => {
          console.log('Error ', error);
          // Handle error case here
        }
      );
      location.reload();
    }
  }

  addSkill() {
    console.log(this.newSkillInput);
    const skillObj = {label: this.newSkillInput};

    this.skillService.addSkill(skillObj).subscribe(
      () => {
        console.log('skill added successfully');
        // Handle success case here
      },
      (error) => {
        console.log('Error ', error);
        // Handle error case here
      }
    );
    location.reload();
  }

  deleteSkill(id: number) {
    if (confirm('Are you sure?') === true) {
      this.skillService.deleteSkill(id).subscribe(
        () => {
          console.log('skill deleted successfully');
          // Handle success case here
        },
        (error) => {
          console.log('Error ', error);
          // Handle error case here
        }
      );
      location.reload();
    }
  }
}
