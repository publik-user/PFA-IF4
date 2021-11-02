import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member';
import { Operation } from 'src/app/models/operation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {

  }

  public getOperationsByMember(member: Member): Observable<Operation> {
    return this.http.post<Operation>(`${this.apiServerUrl}/operation/getAllMemberOprations`, member);
  }

  public updateOperations(member: Member): Observable<Operation> {
    return this.http.post<Operation>(`${this.apiServerUrl}/operation/updateOperation`, member);
  }

  public addOperation(operation: Operation): Observable<Operation> {
    return this.http.post<Operation>(`${this.apiServerUrl}/operation/addOperation`, operation);
  }

  public deleteOperation(oid: Number): Observable<Operation> {
    return this.http.post<Operation>(`${this.apiServerUrl}/operation/removeOperation`, oid);
  }

}
