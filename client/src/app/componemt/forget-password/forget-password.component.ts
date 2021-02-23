import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  form: FormGroup;

  constructor(private userService: UserService) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }

  ngOnInit(): void {}

  submit() {
    if (!this.form.valid) return;
    this.userService
      .forgotPassword(this.form.value.email)
      .subscribe((res) =>
        confirm('New password is waiting for you in your email box')
      );
  }
}
