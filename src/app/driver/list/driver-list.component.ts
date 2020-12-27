import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Driver } from '../../common/entities/Driver';
import { DriverService } from '../../service/data/driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  deleteMessage: string;
  drivers: Driver[];
  noDriverPresentError: string;
  constructor(private driver: DriverService) { }

  ngOnInit(): void {
    this.displayDrivers();
  }

  displayDrivers() {
    this.driver.getDrivers().subscribe(
      response => {
      console.log(response);
      this.drivers = response;
    },
      error => this.handleError(error));
  }

  handleError(error) {
    let noDriverMessage = error.error.message;
    this.noDriverPresentError = noDriverMessage;
  }

  deleteDriver(id: number) {
    this.driver.deleteDriver(id).subscribe(
      response => {
        console.log(response);
        this.ngOnInit();
        this.deleteMessage = `Driver with id : ${id} has been deleted !`;
      },
      error => console.log(error)
    );
  }




}
