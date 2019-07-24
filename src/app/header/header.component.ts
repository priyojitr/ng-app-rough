import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: UserAuthenticationService) { }

  ngOnInit() {
  }

}
