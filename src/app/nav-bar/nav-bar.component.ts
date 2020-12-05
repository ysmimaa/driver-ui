import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.loginService.userIsLogged();
  }
}
