import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/degem/degem';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private userService: UserService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    console.log('init');
  }

  createdUser: User;
  login(): void {
    this.userService.login(this.form.value).subscribe(
      (response) => {
        alert('user logged succesfuly');
        this.createdUser = response;
      },
      (err) => console.log(err)
    );
  }
}
