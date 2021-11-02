import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component'
import { SignupComponent } from './auth/signup/signup/signup.component'
import { DonationsComponent } from './memberStuff/donations/donations.component';
import { UpdateUserComponent } from './memberStuff/update-user/update-user.component';
import { UserInfoComponent } from './memberStuff/user-info/user-info.component';
import { OperationComponent } from './memberStuff/operation/operation.component';
import { DeleteAccountComponent } from './memberStuff/delete-account/delete-account.component';

const routes: Routes = [{ path: 'login', component: LoginComponent }
  , { path: 'signup', component: SignupComponent },
{ path: 'home', component: UserInfoComponent }, {
  path: 'update', component: UpdateUserComponent
},
{ path: 'donations', component: DonationsComponent }, {
  path: 'operations', component: OperationComponent
}, {
  path: 'delete', component: DeleteAccountComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
