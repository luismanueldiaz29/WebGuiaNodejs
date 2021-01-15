import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { loginReq, loginRes } from '../models/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt'; // npm i @auth0/angular-jwt

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.URL;
  private loggedId = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient
  ) { this.checkToken(); }

  get isLogged(): Observable<boolean>{
    return this.loggedId.asObservable();
  }

  login(user: loginReq): Observable<loginRes | void>{
    return this.http.post<loginRes>(`${this.API_URL}/api/auth/login`, user).pipe(
      map((user : loginRes) => {
        // console.log(user)
        this.saveToken(user.token);
        this.loggedId.next(true);
        return user
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  logout(): void{
    localStorage.removeItem('token');
    this.loggedId.next(false);
    //set userIsLogged = false
  }

  private checkToken(): void{
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    console.log('isExpired ->', isExpired)
    
    //si el token expira retorna true, contrario retorna false
    isExpired ? this.logout() : this.loggedId.next(true)
  }

  private saveToken(token: string){
    localStorage.setItem('token', token);
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
