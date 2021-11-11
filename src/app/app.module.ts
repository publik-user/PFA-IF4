import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login/login.component';
import { SignupComponent } from './auth/signup/signup/signup.component';
import { MemberSharedComponent } from './memberStuff/member-shared/member-shared.component';
import { SignupService } from './services/signUpService/signup.service';
import { UserInfoComponent } from './memberStuff/user-info/user-info.component';
import { UpdateUserComponent } from './memberStuff/update-user/update-user.component';
import { DonationsComponent } from './memberStuff/donations/donations.component';
import { OperationComponent } from './memberStuff/operation/operation.component';
import { DeleteAccountComponent } from './memberStuff/delete-account/delete-account.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MemberSharedComponent,
    UserInfoComponent,
    UpdateUserComponent,
    DonationsComponent,
    OperationComponent,
    DeleteAccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
