import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, Input, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChip, MatChipInputEvent, MatChipListChange, MatChipSelectionChange} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {EventEmitter} from '@angular/core';

/**
 * @title Chips Autocomplete
 */
@Component({
  selector: 'app-skill-chips',
  templateUrl: './skill-chips.component.html',
  styleUrls: ['./skill-chips.component.css']
})
export class SkillChipsComponent {
  @Input() allSkills: string[];
  @Input() currentSkills: string[];
  // @ts-ignore
  @Output() selectedChipsData = new EventEmitter<string[]>();

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  skillCtrl = new FormControl();
  filteredSkills: Observable<string[]>;
  // currentSkills: string[] = ['Lemon'];
  // allSkills: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  selectedChips: string[] = [];

  @ViewChild('fruitInput', {static: false}) fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allSkills.slice()));
  }

  ngOnInit() {
    this.selectedChips = this.currentSkills;
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.currentSkills.push(value.trim());
        console.log('adding', value.trim());
        // this.selectedChips.push(value.trim());
        // // Emit the updated selected chips data
        // this.selectedChipsData.emit(this.selectedChips);
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.skillCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    console.log('remove func', this.selectedChips);
    const index = this.currentSkills.indexOf(fruit);

    if (index >= 0) {
      this.currentSkills.splice(index, 1);
      this.selectedChips = this.selectedChips.filter(chip => chip !== fruit);
      // Emit the updated selected chips data
      this.selectedChipsData.emit(this.selectedChips);
      console.log('remove', fruit);
    }

  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.currentSkills.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);
    console.log('selecting');
    this.selectedChips.push(event.option.viewValue);
    // Emit the updated selected chips data
    this.selectedChipsData.emit(this.selectedChips);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSkills.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

}
