import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(username: string, passeword: string) {
    console.log('Before user loggedin : ' + this.userIsLogged())
    if (username !== "" && passeword !== "") {
      sessionStorage.setItem('username', username);
      console.log('After user loggedin : ' + this.userIsLogged())
      return true;
    }
    return false;
  }

  userIsLogged() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('username');
  }

}
