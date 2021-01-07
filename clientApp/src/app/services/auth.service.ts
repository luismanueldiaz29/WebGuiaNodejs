import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { loginReq, loginRes } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.URL;

  constructor(
    private http: HttpClient
  ) { }

  login(user: loginReq): Observable<loginRes | void>{
    return this.http.post<loginRes>(`${this.API_URL}/api/auth/login`, user).pipe(
      map((user : loginRes) => {
        console.log(user)
        return user
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  private handlerError(err): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
}
