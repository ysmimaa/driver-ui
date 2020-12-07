import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Driver } from 'src/app/common/entities/Driver';
@Injectable({
  providedIn: 'root'
})
export class DriverService {

  BASE_URL: string = 'http://localhost:8081/driver/api/';

  driver: Driver;

  constructor(private http: HttpClient) { }

  getDrivers() {
    let headers = new HttpHeaders({
      Authorization: this.sendAuthenticate()
    });
    return this.http.get<Driver[]>(this.BASE_URL + 'drivers', { headers });
  }

  createDriver(driver: Driver) {
    let d: Driver = new Driver(driver.id, driver.firstname, driver.lastname, driver.phone, driver.contractType, null, new Date(driver.hiredDate));
    return this.http.post<Driver>(this.BASE_URL + 'create', d);
  }
  updateDriver(driver: Driver) {
    let d: Driver = new Driver(driver.id, driver.firstname, driver.lastname, driver.phone, driver.contractType, null, new Date(driver.hiredDate));
    return this.http.put(this.BASE_URL + `update`, d);
  }

  findDriverById(id) {
    let headers = new HttpHeaders({
      Authorization: this.sendAuthenticate()
    });
    return this.http.get<Driver>(this.BASE_URL + `${id}`, { headers });
  }

  deleteDriver(id) {
    return this.http.delete(this.BASE_URL + `${id}`);
  }

  sendAuthenticate() {
    let username = 'admin';
    let password = 'admin';
    let authenticationCredentiels = 'Basic ' + window.btoa(username + ':' + password);
    return authenticationCredentiels;
  }
}
