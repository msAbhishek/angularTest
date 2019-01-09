import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewAdminsComponent } from './view-admins/view-admins.component';
import { EditAllComponent } from './edit-all/edit-all.component';
const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path : 'userHome/:id', component: UserHomeComponent},
  { path: 'userEdit/:id', component: UserEditComponent },
  { path: 'adminHome/:id', component: AdminHomeComponent },
  { path: 'adminView/:id', component: ViewAdminsComponent },
  { path: 'editUser/:id', component: EditAllComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
