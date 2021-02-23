import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AllTasksComponent } from './componemt/all-tasks/all-tasks.component';
import { ForgetPasswordComponent } from './componemt/forget-password/forget-password.component';
import { FormComponent } from './componemt/form/form.component';
import { NewTaskComponent } from './componemt/new-task/new-task.component';
import { NewUserComponent } from './componemt/new-user/new-user.component';
import { OpenComponent } from './componemt/open/open.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

const routes: Routes = [
  { path: 'app-newTask', component: NewTaskComponent },
  { path: 'app-edit/:id', component: NewTaskComponent },
  { path: 'app-form', component: FormComponent },
  { path: 'app-newUser', component: NewUserComponent },
  { path: 'app-forgetPassword', component: ForgetPasswordComponent },
  { path: 'app-open', component: OpenComponent },
  { path: 'app-all-tasks', component: AllTasksComponent },
  { path: 'app-password-recovery', component: PasswordRecoveryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
