import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewAdminsComponent } from './view-admins/view-admins.component';
import { EditAllComponent } from './edit-all/edit-all.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    UserHomeComponent,
    UserEditComponent,
    AdminHomeComponent,
    ViewAdminsComponent,
    EditAllComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
