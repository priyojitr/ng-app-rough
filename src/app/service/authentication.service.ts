import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    // do authentication
    if (username === 'bootapp' && password === 'adminpwd') {
      sessionStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean {
    // check whether user logged in
    return sessionStorage.getItem('username') !== null ? true : false;
  }

  logOut(): void {
    sessionStorage.removeItem('username');
  }
}
