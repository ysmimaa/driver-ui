import {Address} from "./Address";
import {Driver} from "./Driver";
import {Factories} from "./Factories";

export class Company {

  public name: string;
  public activity: string;
  public address: Address;
  public drivers: Driver[];
  public factories: Factories;
}
