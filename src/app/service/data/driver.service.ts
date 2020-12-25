import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Driver} from 'src/app/common/entities/Driver';
import {BASE_URL, DRIVER, DRIVERS} from "../../common/constants/driver";
import {Address} from "../../common/entities/Address";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  driver: Driver;

  constructor(private http: HttpClient) {
  }

  getDrivers() {
    let headers = new HttpHeaders({
      Authorization: this.sendAuthenticate()
    });
    return this.http.get<Driver[]>(BASE_URL + DRIVERS, {headers});
  }

  createDriver(driver: Driver) {
    let d: Driver = new Driver(driver.id, driver.firstname, driver.lastname,
      new Address(driver.address.phone, null, null, null, null), driver.contractType, null, new Date(driver.hiredDate));
    return this.http.post<Driver>(BASE_URL + 'create', d);
  }

  updateDriver(driver: Driver) {
    let d: Driver = new Driver(driver.id, driver.firstname, driver.lastname,
      new Address(driver.address.phone, null, null, null, null), driver.contractType, null, new Date(driver.hiredDate));
    return this.http.put(BASE_URL + `update`, d);
  }

  findDriverById(id) {
    let headers = new HttpHeaders({
      Authorization: this.sendAuthenticate()
    });
    return this.http.get<Driver>(BASE_URL + DRIVER + `${id}`, /*{ headers }*/);
  }

  deleteDriver(id) {
    return this.http.delete(BASE_URL + DRIVER + `${id}`);
  }

  sendAuthenticate() {
    let username = 'admin';
    let password = 'admin';
    let authenticationCredentiels = 'Basic ' + window.btoa(username + ':' + password);
    return authenticationCredentiels;
  }
}
