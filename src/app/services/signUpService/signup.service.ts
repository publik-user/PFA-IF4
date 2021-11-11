import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from 'src/app/models/member';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { authenticationRequest } from 'src/app/models/DTO/AuthenticationRequest';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(`${this.apiServerUrl}/member/add`, member);
  }

  public addHash(credential: authenticationRequest): Observable<any> {
    return this.http.post<authenticationRequest>(`${this.apiServerUrl}/Hash/add`, credential);
  }

  public getMemberByCin(cin: Number): Observable<Member> {
    return this.http.get<Member>(`${this.apiServerUrl}/member/find/${cin}`)
  }
}
