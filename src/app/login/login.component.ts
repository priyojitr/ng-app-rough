import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'bootapp';
  password = '';
  invalidLogin = false;

  constructor(private router: Router, private authService: UserAuthenticationService) { }

  ngOnInit() {
  }

  checkLogin(): void {
    if (this.authService.authenticate(this.username, this.password)) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
