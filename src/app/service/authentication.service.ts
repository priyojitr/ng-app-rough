import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})

// this class is responsible for user authentication making service call
export class UserAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: string) {
    const authToken = `Basic ${btoa(`${username}:${password}`)}`;
    const headers = new HttpHeaders({ Authorization: authToken });
    console.log('calling authentication service.........', headers);
    return this.httpClient.get<User>(`http://localhost:8080/employees/validateLogin`, { headers }).pipe(
      map(userData => {
        sessionStorage.setItem(`username`, username);
        sessionStorage.setItem(`basicauth`, authToken);
        return userData;
      })
    );
  }

  isUserLoggedIn(): boolean {
    // check whether user logged in
    return sessionStorage.getItem('username') !== null ? true : false;
  }

  logOut(): void {
    sessionStorage.removeItem('username');
  }
}
