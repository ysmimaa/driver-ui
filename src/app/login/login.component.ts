import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  isValid = false;
  errorMessage = 'Please provide a valid username and password';

  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.handleLogin(this.username, this.password).subscribe(data => {
      console.log(data);
      this.isValid = false;
      this.router.navigate(['welcome', this.username]);
    },
      error => {
        console.log(error)
        this.isValid = true;
      })
  }
}