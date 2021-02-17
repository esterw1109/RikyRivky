import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  form:FormGroup

  constructor() { 
    this.form= new FormGroup({
      email:new FormControl('',[ Validators.email ]),
  })
  }

  ngOnInit(): void {
  }

}
