import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { LoginService } from 'src/app/services/loginService/login.service';
import { MemberService } from 'src/app/services/memberService/member.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  m: Member;

  constructor(private loginService: LoginService, private http: HttpClient, private localStr: LocalStorageService, private memberService: MemberService, private router: Router) { }

  ngOnInit() {
   this.getMemberInfo(); 
  }

  getMemberInfo(): void {
    this.memberService.$isLoggedIn.subscribe(
      (data) => {
        this.m = data;
      }
    )
  }

}
