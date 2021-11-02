import { HttpErrorResponse } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Member } from "src/app/models/member";
import { SignupService } from "src/app/services/signUpService/signup.service";

export class verifFcts {
    public verifyCinInput(addForm: NgForm, signUpService: SignupService): void {
        var cinInput = (<HTMLInputElement>document.getElementById("UserCin")).value;
        const submitBtn = document.getElementById("submitBtn");
        const userCin = addForm.value.cin;
        if (cinInput.length == 8) {
            signUpService.getMemberByCin(userCin).subscribe(
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