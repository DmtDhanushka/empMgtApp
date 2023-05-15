import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {EMPLOYEES} from './EMPLOYEES';
import {Skill} from './skill';
import {SKILLS} from './SKILLS';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  getEmployees(): Observable<Skill[]> {
    return of(SKILLS);
  }
}
