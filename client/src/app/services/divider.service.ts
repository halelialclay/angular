import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../dto/address';
import { Subscription } from 'rxjs';
import { User } from '../dto/user';

@Injectable({
  providedIn: 'root'
})
export class DividerService {
a:boolean=false;
  constructor(private http: HttpClient) { }
  getDivider(id:string){
    return this.http.get<User>(`/api/divider?id=${id}`)

  }
  getDividersList(){
    
    return this.http.get<User[]>("/api/dividers")
  }
  
  updateDivider(user: User){
    return this.http.post("/api/divider",user)
  }


  checkAddress(addressesBit:any[],userId:string,date:string){
    return this.http.post<boolean>(`/api/checkAddress`,{"date":date,"userId":userId,"addressesBit":addressesBit }).subscribe(d=>{})
  }

  deleteDivider(){


  }

  getAddressForDiv(userId,selectedDate){
    return this.http.post<{"addresses":Address[],"addressesBit":any[]}>("/api/dividersesForAdd",{"userId":userId,"selectedDate":selectedDate})
  }

  getAllManagement(){
    return this.http.get<User[]>(`/api/management`)


  }



}
