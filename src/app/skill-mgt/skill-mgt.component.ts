import {Component, OnInit} from '@angular/core';
import {SkillService} from '../skill.service';

@Component({
  selector: 'app-skill-mgt',
  templateUrl: './skill-mgt.component.html',
  styleUrls: ['./skill-mgt.component.css']
})
export class SkillMgtComponent implements OnInit {

  constructor(private skillService: SkillService) {
  }

  skills = [];
  newSillInput: string = undefined;
  skill: string = undefined;

  ngOnInit() {
    this.getSkills();
    console.log('skills', this.skills);
  }

  getSkills(): void {
    this.skillService.getAllSkills().subscribe(e => this.skills = e);
  }

  updateSkill(employee: any) {

  }

  addSkill() {
    console.log(this.newSillInput);
    const skillObj = {label: this.newSillInput};

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
