import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
@Component({
  selector: 'app-reactive-form-grouping-training',
  templateUrl: './reactive-form-grouping-training.component.html',
  styleUrls: ['./reactive-form-grouping-training.component.css']
})
export class ReactiveFormGroupingTrainingComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
