import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Driver} from '../../common/entities/Driver';
import {DriverService} from '../../service/data/driver.service';
import {Address} from "../../common/entities/Address";

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit {

  updateMessage: string;
  driver: Driver;
  driverId: number;

  constructor(private driverService: DriverService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.driver = new Driver(null, null, null, new Address(null, null, null, null, null),
      null, null, null,)
    this.driverId = this.activatedRoute.snapshot.params['idUser'];
    this.driverService.findDriverById(this.driverId).subscribe(response => {
        this.driver = response
      },
      error => {
        console.log(error)
      }
    );
  }

  updateDriver(driver
                 :
                 Driver
  ) {
    console.log("Calling the driver by id API");
    this.driverService.updateDriver(driver).subscribe(driver => {
      driver;
      this.updateMessage = `Driver with id "${this.driverId}" has been updated successfully `;
      this.router.navigate(['driver-list'])
    });
  }

}
