import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { LoginService } from 'src/app/services/loginService/login.service';
import { MemberService } from 'src/app/services/memberService/member.service';


@Component({
  selector: 'app-member-shared',
  templateUrl: './member-shared.component.html',
  styleUrls: ['./member-shared.component.css']
})
export class MemberSharedComponent implements OnInit {
  openClosed: boolean = false;
  ucin: any;
  constructor(private loginService: LoginService, private localStr: LocalStorageService, private memberService: MemberService, private router: Router) { }

  ngOnInit(): void {
    
    this.memberService.getMemberByCin(this.localStr.get("UCIN")).subscribe(
      (response: Member) => {
        this.memberService.$isLoggedIn.emit(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.ucin = this.localStr.get("UCIN");
  }

  public openWorkView(type: string) {
    if (type === "update") {
      this.router.navigate(['/update'], { queryParams: {} });
    }
    else if (type === "home") {
      this.router.navigate(['/home'], { queryParams: {} });
    }
    else if (type === "donate") {
      this.router.navigate(['/donations'], { queryParams: {} });
    }

    else if (type === "operations") {
      this.router.navigate(['/operations'], { queryParams: {} });
    }

    else if (type === "delete") {
      this.router.navigate(['/delete'], { queryParams: {} });
    }
  }

  public onLogout() {
    this.localStr.remove("token");
    this.localStr.remove("UCIN");
    this.router.navigate(['/login'], { queryParams: {} });
  }

  public openNav() {

  }



}
