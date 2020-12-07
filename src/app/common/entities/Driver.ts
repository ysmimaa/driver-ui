import { ContractType } from '../enums/ContractType';

export class Driver {
    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public phone: string,
        public contractType: ContractType,
        public journey: string,
        public hiredDate: Date) { }
}