import {Skill} from './skill';

export interface Employee {
  empId: number;
  name: string;
  email: string;
  dob: string;
  owningSkills: Skill[];
}
