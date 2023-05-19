import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {EMPLOYEES} from './EMPLOYEES';
import {Skill} from './skill';
import {SKILLS} from './SKILLS';
import {Employee} from './employee';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) {
  }

  getAllSkills(): Observable<Skill[]> {
    const url = 'http://localhost:8080/skills/getSkills';
    return this.http.get<Skill[]>(url);
  }

}
