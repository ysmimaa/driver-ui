import {Driver} from "./Driver";
import {Company} from "./Company";
import {Address} from "./Address";

export class Journey {
  constructor(public id: number,
              public address:Address,
              public startAt: Date,
              public endAt: Date,
              public nbrOfPlaces: number,
              public companyId: number,
              public driverId: number,
              public company: Company,
              public driver: Driver) {
  }
}
