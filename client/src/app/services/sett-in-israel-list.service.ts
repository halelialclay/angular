import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../dto/address';
import { DivByDate } from '../dto/divByDate';


@Injectable({
  providedIn: 'root'
})
export class SettInIsraelListService {

  constructor(private http: HttpClient) { }

  getSettInList(){
    return this.http.get<any[]>("/api/settInIsrael")
  }

  getSettFromeDate(date:string){
    return this.http.get<any>(`/api/SettFromeDate?date=${date}`)
  }

  saveSettDate(data){
    //data.date = data.date.toJSON()//.substring(0,23);
    return this.http.post<any>(`/api/SettFromeDate`, data);
  }

  getAddresses(data:String){
    return this.http.get<Address[]>(`/api/address?settId=${data}`);
  }

  getDateDividers(date:String, settId:string){
    return this.http.get<any[]>(`api/divByDate/date/${date}/${settId}`);
  }
 
  newAddress(newAdd){
    return this.http.post<boolean>(`/api/address`,newAdd);
  }

  searchLocations(address:string){
    let url:string = `/Locations?q=${address}&culture=he-IL&maxResults=10&key=AtCC9ZWGBePt56Iz7ydMKvBXY4FduMtITlm9SfbMk99X4q8qFYIDdGafPCs2G1d6`;
    return this.http.get<any>(url);
  }

  saveDivByDate(divByDate:DivByDate){
    return this.http.post<{"firstName":string,"addressName":string[]}[]>(`/api/divByDate`, divByDate);
    
  } 


  deleteAdd(dssr:string){
    return this.http.get<Address[]>(`/api/deleteAddr?_id=${dssr}`)

  }




}
