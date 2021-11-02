import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteAccountService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public deleteAccount(id: Number): any {
    return this.http.delete<any>(`${this.apiServerUrl}/member/delete/${id}`);
  }

}
