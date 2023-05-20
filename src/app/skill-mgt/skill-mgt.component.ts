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

  ngOnInit() {
    this.getSkills();
    console.log('skills', this.skills);
  }

  getSkills(): void {
    this.skillService.getAllSkills().subscribe(e => this.skills = e);
  }

  updateSkill(employee: any) {

  }

  deleteSkill(employee: any) {

  }
}
