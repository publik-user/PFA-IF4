import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authenticationRequest } from 'src/app/models/DTO/AuthenticationRequest';
import { authenticationResponse } from 'src/app/models/DTO/AuthenticationResponse';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getHash(credential: authenticationRequest): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(`${this.apiServerUrl}/authenticate`, credential);
  }

  public verifyToken(token: string): Observable<boolean> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<boolean>(`${this.apiServerUrl}/validateToken`, { headers: headers });
  }
}
