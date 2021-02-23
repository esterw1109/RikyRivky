import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/degem/degem';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      remember: new FormControl(true),
    });
  }

  ngOnInit(): void {
    console.log('init');
  }

  login(): void {
    this.userService.login(this.form.value).subscribe(
      (response) => {
        this.router.navigateByUrl('app-all-tasks');
      },
      (err) => console.log(err)
    );
  }
}
