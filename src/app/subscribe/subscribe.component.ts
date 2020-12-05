import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  errorMessage: string = 'Please provide a valid information';
  isValid: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  subscribe() {
    if (this.firstname === '' && this.lastname === '' && this.email === '') {
      this.isValid = true;
    } else {
      this.isValid = false;
      this.router.navigate(['welcome']);
    }
  }

}
