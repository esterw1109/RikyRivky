import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/degem/degem';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  public addUser: FormGroup;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.addUser = this.fb.group(
      {
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        remember: new FormControl(true),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );

    console.log(this.addUser.value);
  }
  ngOnInit(): void {}

  createdUser: any;
  creatUser() {
    if (!this.addUser.valid) return;
    this.userService.createUser(this.addUser.value).subscribe(
      (response) => {
        this.createdUser = response;
        this.router.navigateByUrl('app-all-tasks');
      },
      (err) => console.log(err)
    );
  }
}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
