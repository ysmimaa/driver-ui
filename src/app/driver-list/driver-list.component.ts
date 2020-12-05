import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Driver } from '../common/entities/Driver';
import { MyMessageService } from '../service/data/my-message.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  drivers: Driver[];

  constructor(private myMessage: MyMessageService) { }

  ngOnInit(): void {
    this.displayDrivers();
  }

  displayDrivers() {
    this.myMessage.getDrivers().subscribe(response => {
      console.log("We are inside the subscriber of the method display drivers !")
      this.drivers = response;
    });
  }
}
