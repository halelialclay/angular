export class User
{
    _id:string;
    userName:string;
    firstName:string;
    lastName:string;
    phone:string;
    role:Role;
}


export enum Role {
   Manager="manager",
    Divider="divider"
    
  }