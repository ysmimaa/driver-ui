import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Driver } from 'src/app/common/entities/Driver';
@Injectable({
  providedIn: 'root'
})
export class MyMessageService {

  constructor(private http: HttpClient) { }

  getDrivers() {
    //http://localhost:8081/driver/api/drivers
    console.log("Hello from the service related to the message")
    return this.http.get<Driver[]>('http://192.168.1.89:8081/driver/api/drivers');
  }
}
