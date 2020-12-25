import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../common/entities/Driver';
import { DriverService } from '../service/data/driver.service';
import {Address} from "../common/entities/Address";

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.css']
})
export class CreateDriverComponent implements OnInit {

  creationMessage: string;
  driver: Driver;

  constructor(private driverService: DriverService,
    private route: Router) { }

  ngOnInit(): void {
    this.driver = new Driver(null, "", null,
      new Address(null,null,null,null,null), null, null, null);
  }

  createDriver() {
    this.driverService.createDriver(this.driver).subscribe(
      response => {
        console.log(response);
        this.route.navigate(['driver-list']);
      },
      error => {
        if (error === null) {
          this.creationMessage = 'A new driver has been created !';
        } else {
          console.log(error);
        }
      }
    );
  }

}
