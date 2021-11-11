import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { DeleteAccountService } from 'src/app/services/delete/delete-account.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { MemberService } from 'src/app/services/memberService/member.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  m: Member;
  constructor(private localStr: LocalStorageService, private memberService: MemberService, private router: Router, private deleteService: DeleteAccountService) { }

  ngOnInit(): void {
    this.getMemberInfo();
  }

  getMemberInfo(): void {
    this.memberService.$isLoggedIn.subscribe(
      (data) => {
        this.m = data;
      }
    )
  }

  onYes(): void {
    this.deleteService.deleteAccount(this.m.cin).subscribe(
      (response) => {
        this.router.navigate(['/login'], { queryParams: {} });
        this.localStr.remove("token");
        this.localStr.remove("UCIN");
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onNo(): void {
    this.router.navigate(['/home'], { queryParams: {} });
  }

}
