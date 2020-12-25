import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/auth/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  constructor(public loginService: LoginService) { }

  ngOnInit(): void { }
}
