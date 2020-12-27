import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  userIsLogged() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('username');
  }

  handleLogin(username, password) {
    let basicAuthCredentials = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorisation: basicAuthCredentials
    })
    return this.http.get<boolean>(`http://localhost:8000/api/user/basic-auth`).pipe(
      map(
        data => {
          sessionStorage.setItem('username', username);
          return data;
        })
    );

  }


}
