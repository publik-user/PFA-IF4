import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { authenticationRequest } from 'src/app/models/DTO/AuthenticationRequest';
import { Member } from 'src/app/models/member';
import { SignupService } from 'src/app/services/signUpService/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: SignupService, private router: Router) { }

  ngOnInit(): void {
  }

  public onAddMember(addForm: NgForm): void {

    this.signupService.addMember(new Member(addForm.value.cin, addForm.value.Nom, addForm.value.Prenom, addForm.value.EMAIL, addForm.value.Address, addForm.value.Sexe, addForm.value.Profession, addForm.value.BirthDate, addForm.value.BloodType, addForm.value.password, addForm.value.isDonor)).subscribe(
      (response: Member) => {
        this.onAddHash(addForm);
        console.log(response);
        addForm.reset;
        this.router.navigate(['/login'], { queryParams: {} });
      }, (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset;
      }
    );
  }

  public onAddHash(addForm: NgForm): void {
    this.signupService.addHash(new authenticationRequest(addForm.value.cin, addForm.value.password)).subscribe(
      (response: Credential) => {
        console.log(response);
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  public verifyCinInput(addForm: NgForm): void {
    var cinInput = (<HTMLInputElement>document.getElementById("UserCin")).value;
    const submitBtn = document.getElementById("submitBtn");
    const userCin = addForm.value.cin;
    if (cinInput.length == 8) {
      this.signupService.getMemberByCin(userCin).subscribe(
        (response: Member) => {
          submitBtn.setAttribute("disabled", "true");
          submitBtn.setAttribute("style", "background-color:#e73939");
          alert("Account already linked to this CIN");
        }, (error: HttpErrorResponse) => {
          submitBtn.setAttribute("disabled", "false");
          submitBtn.setAttribute("style", "background-color:#39ace7");
        }
      );
    } else if (cinInput.length > 8) {
      alert("cin must be equal to 8 numbers");
      submitBtn.setAttribute("disabled", "true");
      submitBtn.setAttribute("style", "background-color:#e73939");
    } else {
      submitBtn.setAttribute("disabled", "true");
      submitBtn.setAttribute("style", "background-color:#e73939");
    }

  }

  public verifyEmailInput(addForm: NgForm): void {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var mailInput = (<HTMLInputElement>document.getElementById("UserEmail")).value;
    var result = regexp.test(mailInput);
    if (!result) {
      this.setInputAndBtnBgToInvalid("UserEmail");
    }
    else {
      this.setInputAndBtnBgToValid("UserEmail");
    }
  }

  public verifyBirthdayInput(addForm: NgForm): void {
    var Bdate = Math.floor((addForm.value.BirthDate.replace(/-/g, '')) / 10000);

    var age = (new Date().getFullYear() - Bdate)
    if ((age >= 100) || (age < 18)) {
      this.setInputAndBtnBgToInvalid("UserBirthday");
      //alert("age must be between 18 and 99 years")
    }
    else
      this.setInputAndBtnBgToValid("UserBirthday");
  }

  public verifyPasswordInput(): void {
    const regexp = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    var passwrd = (<HTMLInputElement>document.getElementById("UserPassword")).value;
    var result = regexp.test(passwrd);
    if (!result) {
      this.setInputAndBtnBgToInvalid("UserPassword");
    }
    else { this.setInputAndBtnBgToValid("UserPassword"); }
  }


  private setInputAndBtnBgToInvalid(InputId: string): void {
    document.getElementById("submitBtn").setAttribute("disabled", "true");
    document.getElementById("submitBtn").setAttribute("style", "background-color:#e73939");
    document.getElementById(InputId).setAttribute("style", "background-color:#e73939");
  }

  private setInputAndBtnBgToValid(InputId: string): void {
    document.getElementById("submitBtn").setAttribute("disabled", "false");
    document.getElementById("submitBtn").setAttribute("style", "background-color:#39ace7");
    document.getElementById(InputId).setAttribute("style", "background-color:#39ace7");
  }

}
