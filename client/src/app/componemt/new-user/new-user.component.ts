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
  public name: FormControl;
  public password: FormControl;

  constructor(public router: Router, private userService: UserService) {
    this.addUser = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    console.log(this.addUser.value);
  }
  ngOnInit(): void {}

  createdUser: any;
  creatUser() {
    const user = {
      name: this.addUser.controls.name.value,
      password: this.addUser.controls.password.value,
    };
    this.userService.createUser(user).subscribe(
      (response) => {
        this.createdUser = response;
        alert('user created succesfuly');
      },
      (err) => console.log(err)
    );
  }
}
