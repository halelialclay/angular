import { Address } from "./address";

export class Statistic
{
    _id:string;
    settId:{_id:string, name:string};
    date:Date;
    userId:{_id:string, firstName:string};
    addresses:Address[];
    addressesBit:number[];
}
