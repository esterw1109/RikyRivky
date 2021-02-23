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
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { Geofence } from '@ionic-native/geofence/ngx';
import { MyMaterialModule } from './modules/my-material/my-material.module';
import { GoogleAddressComponent } from './google-address/google-address.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ClickOutsideDirective } from './click-outside.directive';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NewTaskComponent,
    ForgetPasswordComponent,
    NewUserComponent,
    AllTasksComponent,
    OpenComponent,
    TestComponent,
    GoogleAddressComponent,
    HomeComponent,
    ClickOutsideDirective,
    PasswordRecoveryComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEVM6RTivD-5HItj1N-_n_DKLy5xUbZhU',
      libraries: ['places', 'geometry', 'drawing'],
    }),
    MyMaterialModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [Geofence],
  bootstrap: [AppComponent],
})
export class AppModule {}
