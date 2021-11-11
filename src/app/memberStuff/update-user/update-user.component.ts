import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/memberService/member.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  m: Member;
  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit(): void {
    this.getMemberInfo();
    document.getElementsByTagName("li")[0].setAttribute("class", "nav-item");
    document.getElementsByTagName("li")[1].setAttribute("class", "nav-item active");
  }

  getMemberInfo(): void {
    this.memberService.$isLoggedIn.subscribe(
      (data) => {
        this.m = data;
      }
    )
  }

  public onUpdateMember(addForm: NgForm): void {
    this.memberService.updateMember(new Member(this.m.cin, addForm.value.Nom, addForm.value.Prenom, addForm.value.EMAIL, addForm.value.Address, addForm.value.Sexe, addForm.value.Profession, addForm.value.BirthDate, addForm.value.BloodType, addForm.value.password, addForm.value.isDonor)).subscribe(
      (response: Member) => {
        console.log(response);
        this.memberService.$isLoggedIn.emit(response);
        addForm.reset;
        this.router.navigate(['/home'], { queryParams: {} });
      }, (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset;
      }
    );
  }

}
