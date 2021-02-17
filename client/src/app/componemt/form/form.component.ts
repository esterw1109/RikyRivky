import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form= new FormGroup({
      name:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
  })
   }

  ngOnInit(): void {
    console.log('init')
  }

}
