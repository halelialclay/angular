import { Address } from "./address";
import { SettAndDate } from "./settDate";
import { User } from "./user";

export class DivByDate
{
    _id:string;
    date:SettAndDate
    addresses:Address[]
    users:User[];
}