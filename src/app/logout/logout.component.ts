import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: UserAuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authService.logOut();
    this.router.navigate(['login']);
  }

}
