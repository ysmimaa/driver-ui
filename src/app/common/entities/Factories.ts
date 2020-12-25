import {Address} from "./Address";

export class Factories {
  constructor(public id: number,
              public name: string,
              public address: Address,
              public description: string) {
  }
}
