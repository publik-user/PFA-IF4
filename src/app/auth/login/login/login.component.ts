import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { authenticationRequest } from 'src/app/models/DTO/AuthenticationRequest';
import { authenticationResponse } from 'src/app/models/DTO/AuthenticationResponse';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { LoginService } from 'src/app/services/loginService/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ar: authenticationResponse;


  constructor(private loginService: LoginService, private localStr: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.localStr.get("token") != null) {
      this.loginService.verifyToken(this.localStr.get("token")).subscribe(
        (response: boolean) => {
          if (response) {
            this.router.navigate(['/home'], { queryParams: {} });
          }
          else {
            this.localStr.remove("token");
            this.localStr.remove("UCIN");
            alert("error");
          }
        }
      )
    }
  }

  persist(key: string, value: any) {
    this.localStr.set(key, value);
  }

  public onAuthentificate(authForm: NgForm): void {
    this.loginService.getHash(new authenticationRequest(authForm.value.cin, authForm.value.password)).subscribe(
      (response: any) => {
        authForm.reset;
        this.persist("UCIN", authForm.value.cin);
        this.persist("token", response.jwt);
        this.router.navigate(['/home'], { queryParams: {} });
      }, (error: HttpErrorResponse) => {
        alert(error.message);
        this.router.navigate(['/login'], { queryParams: {} });
        authForm.reset;
      }
    );
  }
}
