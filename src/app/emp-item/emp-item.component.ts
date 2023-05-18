import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../employee';

@Component({
  selector: 'app-emp-item',
  templateUrl: './emp-item.component.html',
  styleUrls: ['./emp-item.component.css']
})
export class EmpItemComponent implements OnInit {
  @Input() employee: Employee;
  constructor() {
  }

  ngOnInit() {
  }



}
