
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './componemt/form/form.component';
import { NewTaskComponent } from './componemt/new-task/new-task.component';
import { ForgetPasswordComponent } from './componemt/forget-password/forget-password.component';
import { NewUserComponent } from './componemt/new-user/new-user.component';
import { AllTasksComponent } from './componemt/all-tasks/all-tasks.component';
import { OpenComponent } from './componemt/open/open.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {AgmCoreModule} from '@agm/core'
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { Geofence } from '@ionic-native/geofence/ngx';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NewTaskComponent,
    ForgetPasswordComponent,
    NewUserComponent,
    AllTasksComponent,
    OpenComponent,
    TestComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:
      'AIzaSyCEVM6RTivD-5HItj1N-_n_DKLy5xUbZhU',
      libraries: ['places','geometry','drawing']
    })    
   

  ],
  providers: [Geofence],
  bootstrap: [AppComponent]
})
export class AppModule { }
