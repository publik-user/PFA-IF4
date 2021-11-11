import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  $isLoggedIn = new EventEmitter();

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getMemberByCin(cin: Number): Observable<Member> {
    return this.http.get<Member>(`${this.apiServerUrl}/member/find/${cin}`);
  }

  public updateMember(member: Member): Observable<Member> {
    return this.http.post<Member>(`${this.apiServerUrl}/member/update`, member);
  }
}
