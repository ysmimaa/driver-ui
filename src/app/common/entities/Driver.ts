import {ContractType} from '../enums/ContractType';
import {Address} from "./Address";


export class Driver {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public address: Address,
    public contractType: ContractType,
    public journey: string,
    public hiredDate: Date) {
  }
}
