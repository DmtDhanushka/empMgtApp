import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-errors-example',
  templateUrl: './input-errors-example.component.html',
  styleUrls: ['./input-errors-example.component.css']
})
export class InputErrorsExampleComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor() { }

  ngOnInit() {
  }

}
