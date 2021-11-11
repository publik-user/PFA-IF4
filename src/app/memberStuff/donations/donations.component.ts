import { Component, OnInit } from '@angular/core';
import { BloodBag } from 'src/app/models/bloodBag';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/memberService/member.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  public donations: BloodBag[];
  m: Member;

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





}
